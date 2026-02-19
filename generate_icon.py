from PIL import Image, ImageDraw, ImageFont
import os

# Create icon.png (1024x1024)
icon = Image.new('RGB', (1024, 1024), color='#991b1b')
draw = ImageDraw.Draw(icon)
# Draw a simple "O" for Optimus
draw.ellipse([256, 256, 768, 768], outline='white', width=40)
icon.save('assets/icon.png')

# Create adaptive icon (1024x1024)
adaptive = Image.new('RGB', (1024, 1024), color='#991b1b')
draw = ImageDraw.Draw(adaptive)
draw.ellipse([256, 256, 768, 768], outline='white', width=40)
adaptive.save('assets/adaptive-icon.png')

# Create favicon (48x48)
favicon = Image.new('RGB', (48, 48), color='#991b1b')
draw = ImageDraw.Draw(favicon)
draw.ellipse([12, 12, 36, 36], outline='white', width=3)
favicon.save('assets/favicon.png')

print("Icons created successfully!")
