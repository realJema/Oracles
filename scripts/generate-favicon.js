import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  const sizes = [16, 32, 48, 64, 128, 256];
  const inputFile = path.join(path.dirname(__dirname), 'public', 'logo.jpg');
  const outputDir = path.join(path.dirname(__dirname), 'public');

  try {
    // Create ICO file with multiple sizes
    const promises = sizes.map(size => 
      sharp(inputFile)
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toBuffer()
    );

    const buffers = await Promise.all(promises);
    
    // Save as PNG files first
    await Promise.all(
      buffers.map((buffer, i) => 
        fs.writeFile(
          path.join(outputDir, `favicon-${sizes[i]}.png`),
          buffer
        )
      )
    );

    console.log('Favicon files generated successfully!');
    console.log('Please use a tool like https://realfavicongenerator.net/ to convert these PNGs to ICO format');
    console.log('Then replace the favicon.ico in the app directory');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicon(); 
