import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { apiService } from '../services/api';
import { mergeProducts } from '../utils/productMerger';
import { product as localProducts, siteData as localSiteData } from '../data/sitedata';

interface ProductContextType {
  products: any[];
  isLoading: boolean;
  error: string | null;
  refreshProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<any[]>(localProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAndMergeProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch only products from API
      const apiProducts = await apiService.getProducts();

      // Merge local and API products
      const mergedProducts = mergeProducts(localProducts, apiProducts);

      // Update state
      setProducts(mergedProducts);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err instanceof Error ? err.message : 'Failed to load products');
      // Keep local data as fallback
    } finally {
      setIsLoading(false);
    }
  };

  const refreshProducts = async () => {
    await fetchAndMergeProducts();
  };

  useEffect(() => {
    fetchAndMergeProducts();
  }, []);

  const value: ProductContextType = {
    products,
    isLoading,
    error,
    refreshProducts
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
