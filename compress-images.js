const sharp = require('sharp');
const path = require('path');

const imageDir = path.join(__dirname, 'src', 'img');

const images = [
    'Rev Hero 1.jpg',
    'Rev Hero 2.jpg'
];

async function compressImages() {
    try {
        for (const image of images) {
            const inputPath = path.join(imageDir, image);
            const outputPath = path.join(imageDir, image.replace('.jpg', '-desktop.jpg'));

            // Compress for desktop: reduce quality but keep dimensions
            await sharp(inputPath)
                .jpeg({ quality: 75, progressive: true })
                .toFile(outputPath);

            console.log(`✓ Compressed: ${image} → ${image.replace('.jpg', '-desktop.jpg')}`);
        }
        console.log('All images compressed successfully!');
    } catch (error) {
        console.error('Error compressing images:', error);
    }
}

compressImages();
