// DEPRECATED: This utility is no longer used.
// Products now come exclusively from the API via ProductContext.
// Keeping file for reference - can be removed in future cleanup.

import type { Product } from '../services/api';

export type { Product };

/**
 * @deprecated Products are now fetched exclusively from API.
 * Use ProductContext and apiService directly instead.
 */
export function mergeProducts(_localProducts: unknown[], apiProducts: Product[]): Product[] {
  // Pass-through: return API products only
  return apiProducts;
}
