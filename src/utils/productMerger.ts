import type { Product } from '../services/api';

export interface LocalProduct {
  category: string;
  header: string;
  description: string;
  features: string[];
  image?: string;
}

export interface ApiProduct extends Product {
  id?: number;
  image_url?: string;
  image_public_id?: string;
  created_at?: string;
}

/**
 * Merges local static products with dynamic API products
 * Ensures no duplicates based on category and header combination
 * Maps API fields to local structure for consistency
 */
export function mergeProducts(localProducts: LocalProduct[], apiProducts: ApiProduct[]): Product[] {
  const mergedMap = new Map<string, Product>();
  
  // Add local products first
  localProducts.forEach(product => {
    const key = `${product.category}-${product.header}`;
    mergedMap.set(key, { 
      ...product,
      image: product.image || undefined
    });
  });
  
  // Add API products, overriding locals if same category+header exists
  apiProducts.forEach(product => {
    const key = `${product.category}-${product.header}`;
    mergedMap.set(key, { 
      category: product.category,
      header: product.header,
      description: product.description,
      features: product.features,
      // Prioritize API image_url over local image field
      image: product.image_url || product.image || undefined,
      id: product.id,
      image_url: product.image_url,
      image_public_id: product.image_public_id,
      created_at: product.created_at
    });
  });
  
  // Convert map back to array and shuffle for mixing
  const mergedArray = Array.from(mergedMap.values());
  return shuffleArray(mergedArray);
}

/**
 * Shuffles array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
