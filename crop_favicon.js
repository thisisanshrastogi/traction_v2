const Jimp = require('jimp');

async function cropAndSave() {
    try {
        const imgPath = '/home/blackdronzer/.gemini/antigravity/brain/ce08c03f-5bf9-467b-b2c5-6778453509f2/media__1772354585948.png';
        const outPath = '/home/blackdronzer/Documents/CollegeProject/traction_v2/public/favicon.png';

        console.log("Loading image...", imgPath);
        const image = await Jimp.read(imgPath);

        console.log("Autocropping image...");
        // autocrop removes the uniform borders
        image.autocrop();

        const w = image.bitmap.width;
        const h = image.bitmap.height;
        const size = Math.max(w, h);

        // Add 5% padding
        const pad = Math.floor(size * 0.05);
        const newSize = size + 2 * pad;

        console.log(`Original cropped size: ${w}x${h}, new padded size: ${newSize}x${newSize}`);

        // Create a new image with transparent background
        const paddedImage = new Jimp(newSize, newSize, 0x00000000);

        const x = Math.floor((newSize - w) / 2);
        const y = Math.floor((newSize - h) / 2);

        // Composite the cropped image onto the transparent centered one
        paddedImage.composite(image, x, y);

        console.log("Saving image...");
        await paddedImage.writeAsync(outPath);
        console.log("Success! Saved to", outPath);
    } catch (err) {
        console.error("Error processing image:", err);
        process.exit(1);
    }
}

cropAndSave();
