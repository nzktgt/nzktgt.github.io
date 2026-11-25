from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
root = Path(__file__).resolve().parents[1]
out = root / 'public' / 'images'
# Pixel coordinates refer to original images. Opaque masks remove student IDs
# from derived public images; source files remain untouched.
items = [
 ('4.jpg','social-practice',[(718,785,950,838)]),
 ('5.jpg','leadership-scholarship',[(190,849,450,908)]),
 ('6.jpg','student-leader',[(139,880,442,948)]),
 ('7.jpg','planning-award',[]),
 ('8.jpg','outreach',[(785,570,862,612),(220,632,383,674)]),
 ('9.jpg','planning-materials',[]),
]
for source, name, masks in items:
    with Image.open(root / source) as im:
        im = ImageOps.exif_transpose(im).convert('RGB')
        draw = ImageDraw.Draw(im)
        for box in masks:
            draw.rectangle(box, fill='#273e39')
        im.thumbnail((1600,2000))
        im.save(out / f'{name}.webp','WEBP',quality=90)
        print(source, im.size, 'masked regions:',len(masks))
