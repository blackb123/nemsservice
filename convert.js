import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const directory = path.join(__dirname, 'src', 'assets');

const extensionsToConvert = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

/**
 * Fonction récursive pour parcourir les dossiers
 */
async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Si c'est un dossier, on rentre dedans
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name);
      
      if (extensionsToConvert.includes(ext)) {
        const fileName = path.parse(entry.name).name;
        const outputPath = path.join(dir, `${fileName}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          console.log(`✅ Converti : ${entry.name} -> ${fileName}.webp`);

          // ⚠️ SUPPRESSION DE L'ORIGINAL
          fs.unlinkSync(fullPath);
          console.log(`   🗑️ Original supprimé : ${entry.name}`);
        } catch (err) {
          console.error(`❌ Erreur sur ${entry.name}:`, err);
        }
      }
    }
  }
}

console.log(`🚀 Début de la conversion récursive dans : ${directory}`);
processDirectory(directory)
  .then(() => console.log('✨ Conversion et nettoyage terminés !'))
  .catch(err => console.error('💥 Erreur fatale :', err));