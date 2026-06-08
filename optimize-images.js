import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public/gellary';

if (!fs.existsSync(publicDir)) {
  console.error(`Directory ${publicDir} does not exist!`);
  process.exit(1);
}

const files = fs.readdirSync(publicDir);

console.log('Starting image optimization pipeline for ' + publicDir + '...');

const optimizationPromises = files.map(async (file) => {
  const ext = path.extname(file).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const inputPath = path.join(publicDir, file);
    const outputName = path.basename(file, ext) + '.webp';
    const outputPath = path.join(publicDir, outputName);

    try {
      const info = await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const origSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
      const newSize = (info.size / 1024).toFixed(1);
      const savings = ((1 - info.size / fs.statSync(inputPath).size) * 100).toFixed(0);
      
      console.log(`Converted ${file} (${origSize} KB) -> ${outputName} (${newSize} KB) [Saved ${savings}%]`);
      
      // Delete original file
      fs.unlinkSync(inputPath);
      console.log(`Deleted original: ${file}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
});

Promise.all(optimizationPromises).then(() => {
  console.log('Image optimization pipeline finished!');
});

