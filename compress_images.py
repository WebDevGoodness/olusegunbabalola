#!/usr/bin/env python3
from PIL import Image
import os

img_dir = r'src\img'
images = ['Rev Hero 1.jpg', 'Rev Hero 2.jpg']

def compress_image(image_name):
    input_path = os.path.join(img_dir, image_name)
    output_name = image_name.replace('.jpg', '-desktop.jpg')
    output_path = os.path.join(img_dir, output_name)
    
    try:
        # Open and compress the image
        img = Image.open(input_path)
        
        # Save with reduced quality for desktop
        img.save(output_path, 'JPEG', quality=75, optimize=True)
        
        # Get file sizes
        original_size = os.path.getsize(input_path) / (1024 * 1024)
        compressed_size = os.path.getsize(output_path) / (1024 * 1024)
        reduction = ((original_size - compressed_size) / original_size) * 100
        
        print(f"✓ {image_name}")
        print(f"  Original: {original_size:.2f} MB")
        print(f"  Compressed: {compressed_size:.2f} MB")
        print(f"  Reduction: {reduction:.1f}%\n")
        
    except Exception as e:
        print(f"✗ Error compressing {image_name}: {e}\n")

print("🖼️  Compressing hero images for desktop...\n")
for image in images:
    compress_image(image)
print("✅ Compression complete!")
