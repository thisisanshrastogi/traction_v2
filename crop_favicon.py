import os
from PIL import Image, ImageChops

def crop_and_pad(img_path, out_path):
    img = Image.open(img_path).convert('RGBA')
    
    # Create a solid white background
    bg_white = Image.new('RGB', img.size, (255, 255, 255))
    
    # Paste the image onto the white background, using its alpha channel as the mask
    # This turns any transparent pixels into white pixels.
    pasted = bg_white.copy()
    pasted.paste(img, (0, 0), img)
    
    # Find the difference between this and a pure white image
    diff = ImageChops.difference(pasted, bg_white)
    
    # The bounding box of the difference is the bounding box of the non-white content
    bbox = diff.getbbox()
    
    if bbox:
        # Crop the ORIGINAL image using this bounding box (preserves the actual colors and alphas inside)
        cropped = img.crop(bbox)
        w, h = cropped.size
        size = max(w, h)
        
        # Add 5% padding around the tightest bounds to fill the square perfectly without touching the edges
        pad = int(size * 0.05)
        new_size = size + 2 * pad
        
        # We can put it on the `#F4F4F0` cream background matching the theme, or just transparent.
        # Let's put it on transparent, it works well. But wait, earlier I used the cream background.
        # Let's use the cream background, actually `#F4F4F0` = rgb(244, 244, 240)
        # But wait! A favicon should probably be transparent, so it works anywhere.
        # The user said "make it the thmee orange so i can use it as favicon" previously, but they supplied this image themselves.
        # Let's just make the padded area transparent.
        new_img = Image.new('RGBA', (new_size, new_size), (0, 0, 0, 0))
        
        x = (new_size - w) // 2
        y = (new_size - h) // 2
        
        # Paste the cropped image into the center
        new_img.paste(cropped, (x, y), cropped)
        
        new_img.save(out_path)
        print("Cropped successfully to:", out_path)
    else:
        print("Could not find content to crop")

crop_and_pad(
    "/home/blackdronzer/.gemini/antigravity/brain/ce08c03f-5bf9-467b-b2c5-6778453509f2/media__1772354585948.png",
    "/home/blackdronzer/Documents/CollegeProject/traction_v2/public/favicon.png"
)
