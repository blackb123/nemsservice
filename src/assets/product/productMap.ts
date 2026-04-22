// Dynamic image mapping to prevent resource exhaustion
const productImageMap: Record<number, string> = {};

// Initialize with image IDs that exist
for (let i = 4; i <= 223; i++) {
  productImageMap[i] = `/src/assets/product/${i}.webp`;
}

export const getProductImage = (imageId: number): string => {
  return productImageMap[imageId] || '';
};

export const preloadImage = (imageId: number): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = getProductImage(imageId);
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

// Batch preload with delay to prevent overwhelming
export const preloadBatch = async (imageIds: number[], batchSize = 5): Promise<void> => {
  for (let i = 0; i < imageIds.length; i += batchSize) {
    const batch = imageIds.slice(i, i + batchSize);
    await Promise.all(batch.map(id => preloadImage(id).catch(() => {})));
    
    // Small delay between batches
    if (i + batchSize < imageIds.length) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
};
