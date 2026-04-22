// Dynamic image loader to prevent resource exhaustion
class LazyImageLoader {
  private static imageCache = new Map<number, string>();
  private static loadPromises = new Map<number, Promise<string>>();

  static async loadImage(imageId: number): Promise<string> {
    // Return cached image if already loaded
    if (this.imageCache.has(imageId)) {
      return this.imageCache.get(imageId)!;
    }

    // Return existing promise if already loading
    if (this.loadPromises.has(imageId)) {
      return this.loadPromises.get(imageId)!;
    }

    // Create new load promise
    const loadPromise = this.dynamicImport(imageId);
    this.loadPromises.set(imageId, loadPromise);

    try {
      const imageUrl = await loadPromise;
      this.imageCache.set(imageId, imageUrl);
      return imageUrl;
    } finally {
      this.loadPromises.delete(imageId);
    }
  }

  private static async dynamicImport(imageId: number): Promise<string> {
    try {
      const module = await import(`../assets/product/${imageId}.webp`);
      return module.default;
    } catch (error) {
      console.error(`Failed to load image ${imageId}:`, error);
      return ''; // Return empty string or fallback image
    }
  }

  // Preload images in batches to avoid overwhelming the browser
  static async preloadBatch(imageIds: number[], batchSize = 10): Promise<void> {
    for (let i = 0; i < imageIds.length; i += batchSize) {
      const batch = imageIds.slice(i, i + batchSize);
      await Promise.all(batch.map(id => this.loadImage(id)));
      
      // Small delay between batches to let browser breathe
      if (i + batchSize < imageIds.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
  }
}

export default LazyImageLoader;
