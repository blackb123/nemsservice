import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 🔥 Target ONLY product folder
const directory = path.join(__dirname, 'src', 'assets', 'product');

const extensionsToConvert = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

/**
 * Recursive directory processor
 */
async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Go inside subfolder
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name);

      if (extensionsToConvert.includes(ext)) {
        const fileName = path.parse(entry.name).name;
        const outputPath = path.join(dir, `${fileName}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 100 })
            .toFile(outputPath);

          console.log(`✅ Converted: ${entry.name} → ${fileName}.webp`);

          // 🗑️ Delete original file
          fs.unlinkSync(fullPath);
          console.log(`🗑️ Deleted original: ${entry.name}`);

        } catch (err) {
          console.error(`❌ Error processing ${entry.name}:`, err);
        }
      }
    }
  }
}

console.log(`🚀 Starting conversion in: ${directory}`);

processDirectory(directory)
  .then(() => console.log('✨ Conversion and cleanup finished!'))
  .catch(err => console.error('💥 Fatal error:', err));