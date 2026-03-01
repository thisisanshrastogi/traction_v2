const sharp = require('sharp');

async function cropAndSave() {
    try {
        const imgPath = '/home/blackdronzer/.gemini/antigravity/brain/ce08c03f-5bf9-467b-b2c5-6778453509f2/media__1772354585948.png';
        const outPath = '/home/blackdronzer/Documents/CollegeProject/traction_v2/public/favicon.png';

        console.log("Trimming image...");
        const { data, info } = await sharp(imgPath)
            .trim()
            .toBuffer({ resolveWithObject: true });

        const w = info.width;
        const h = info.height;
        const size = Math.max(w, h);

        // Add 5% padding
        const pad = Math.floor(size * 0.05);
        const newSize = size + 2 * pad;

        console.log(`Original cropped size: ${w}x${h}, new padded size: ${newSize}x${newSize}`);

        console.log("Compositing and saving...");
        await sharp({
            create: {
                width: newSize,
                height: newSize,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 } // transparent
            }
        })
            .composite([{ input: data, gravity: 'center' }])
            .png()
            .toFile(outPath);

        console.log("Success! Saved to", outPath);
    } catch (err) {
        console.error("Error processing image:", err);
        process.exit(1);
    }
}

cropAndSave();
