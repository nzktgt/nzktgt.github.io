from pathlib import Path
from PIL import Image, ImageOps
import shutil
root = Path(__file__).resolve().parents[1]
out = root / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)
for source, name, width in [('1.jpg', 'portrait', 900), ('2.jpg', 'journey', 1200), ('3.jpg', 'london', 1200)]:
    with Image.open(root / source) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        image.thumbnail((width, 1800))
        image.save(out / f'{name}.webp', 'WEBP', quality=85)
(root / 'public' / 'documents').mkdir(exist_ok=True)
shutil.copyfile(root / 'NAZHAKAITI_YUSUFU_GEM_CV(1).pdf', root / 'public' / 'documents' / 'Nazhakaiti-Yusufu-CV.pdf')
print('Created optimized images (without EXIF) and a copy of the original CV.')
