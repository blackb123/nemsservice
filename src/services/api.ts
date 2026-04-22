// API service for fetching dynamic product data

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Individual image object in the images array
export interface ProductImage {
  url: string;
  public_id: string;
  order: number;
}

// Single product object from API
export interface Product {
  category: string;
  header: string;
  description: string;
  features: string[];
  images: ProductImage[];
  primary_image_index: number;
  id: number;
  is_active: boolean;
  created_at: string;  // ISO datetime string
  updated_at: string | null;
}

// Paginated response wrapper
export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getProducts(skip: number = 0, limit: number = 100): Promise<ProductListResponse> {
    try {
      const url = `${this.baseUrl}/products?skip=${skip}&limit=${limit}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ProductListResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Return empty response on failure to prevent app crash
      return {
        products: [],
        total: 0,
        skip: skip,
        limit: limit
      };
    }
  }

  // Helper to get primary image URL from product
  getPrimaryImageUrl(product: Product): string {
    if (product.images && product.images.length > 0) {
      const primaryIndex = product.primary_image_index ?? 0;
      const primaryImage = product.images[primaryIndex] || product.images[0];
      return primaryImage?.url || '';
    }
    return '';
  }
}

export const apiService = new ApiService();
export default apiService;
