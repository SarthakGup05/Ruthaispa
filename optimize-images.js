import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public';

const files = fs.readdirSync(publicDir);

console.log('Starting image optimization pipeline...');

files.forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const inputPath = path.join(publicDir, file);
    const outputName = path.basename(file, ext) + '.webp';
    const outputPath = path.join(publicDir, outputName);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then((info) => {
        const origSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
        const newSize = (info.size / 1024).toFixed(1);
        console.log(`Converted ${file} (${origSize} KB) -> ${outputName} (${newSize} KB) [Saved ${((1 - info.size / fs.statSync(inputPath).size) * 100).toFixed(0)}%]`);
      })
      .catch((err) => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
