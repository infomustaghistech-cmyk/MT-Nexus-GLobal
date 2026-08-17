import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = './public';

async function convertImages() {
  const files = await fs.readdir(PUBLIC_DIR);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const outputPath = path.join(PUBLIC_DIR, `${base}.webp`);
      
      console.log(`Converting ${file} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 75 })
        .toFile(outputPath);
      console.log(`Done: ${outputPath}`);
    }
  }
}

convertImages().catch(console.error);
