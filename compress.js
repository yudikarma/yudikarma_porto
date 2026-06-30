import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'assets');
const OUTPUT_DIR = path.join(__dirname, 'public', 'assets', 'compressed');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function compressImage(inputPath, outputPath) {
  try {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Process image: resize to max width 1200px (keep aspect ratio) and convert to webp (quality: 75)
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 75 })
      .toFile(outputPath);
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    
    console.log(`Compressed: ${path.relative(__dirname, inputPath)} -> ${path.relative(__dirname, outputPath)}`);
    console.log(`  Size: ${(inputSize / 1024).toFixed(1)} KB -> ${(outputSize / 1024).toFixed(1)} KB (${savings}% savings)`);
    return outputSize;
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err.message);
    return 0;
  }
}

async function processDirectory(dir, relativePath = '') {
  const currentDir = path.join(dir, relativePath);
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const entryRelativePath = path.join(relativePath, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name === '.aistudio' || entry.name === 'compressed') continue;
      await processDirectory(dir, entryRelativePath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const inputPath = path.join(currentDir, entry.name);
        
        // Output path will replace the extension with .webp and be placed in public/assets/compressed/
        const baseName = path.basename(entry.name, ext);
        const outputPath = path.join(OUTPUT_DIR, relativePath, `${baseName}.webp`);
        
        await compressImage(inputPath, outputPath);
      }
    }
  }
}

async function main() {
  console.log('Starting image compression...');
  const start = Date.now();
  await processDirectory(ASSETS_DIR);
  console.log(`Finished compression in ${((Date.now() - start) / 1000).toFixed(2)}s`);
}

main().catch(err => {
  console.error('Fatal error in compression script:', err);
});
