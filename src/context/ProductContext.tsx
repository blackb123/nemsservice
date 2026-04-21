import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { apiService, type Product, type ProductListResponse } from '../services/api';

interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  total: number;
  refreshProducts: () => Promise<void>;
  loadMore: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

const PRODUCTS_PER_PAGE = 100;

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [currentSkip, setCurrentSkip] = useState(0);

  const fetchProducts = async (skip: number = 0, append: boolean = false) => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch products from API with pagination
      const response: ProductListResponse = await apiService.getProducts(skip, PRODUCTS_PER_PAGE);

      // Update state
      if (append) {
        setProducts(prev => [...prev, ...response.products]);
      } else {
        setProducts(response.products);
      }
      setTotal(response.total);
      setCurrentSkip(skip + response.products.length);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshProducts = async () => {
    setCurrentSkip(0);
    await fetchProducts(0, false);
  };

  const loadMore = async () => {
    if (products.length < total && !isLoading) {
      await fetchProducts(currentSkip, true);
    }
  };

  useEffect(() => {
    fetchProducts(0, false);
  }, []);

  const value: ProductContextType = {
    products,
    isLoading,
    error,
    total,
    refreshProducts,
    loadMore
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}

export default ProductContext;
