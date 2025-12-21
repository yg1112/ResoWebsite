#!/usr/bin/env sh
set -e

# Generates favicons from src/assets/Reso_Logo.png into public/
# Requires ImageMagick's `magick` command to be installed.

SRC="src/assets/Reso_Logo.png"
OUT_DIR="public"

if [ ! -f "$SRC" ]; then
  echo "Source file $SRC not found."
  exit 1
fi

mkdir -p "$OUT_DIR"

# Trim transparent/near-transparent border (use fuzz to remove halo), then resize
magick "$SRC" -alpha set -fuzz 12% -trim +repage "$OUT_DIR/Reso_Logo_trim.png"

magick "$OUT_DIR/Reso_Logo_trim.png" -resize 16x16 "$OUT_DIR/favicon-16.png"
magick "$OUT_DIR/Reso_Logo_trim.png" -resize 32x32 "$OUT_DIR/favicon-32.png"
magick "$OUT_DIR/Reso_Logo_trim.png" -resize 48x48 "$OUT_DIR/favicon-48.png"
magick "$OUT_DIR/Reso_Logo_trim.png" -resize 96x96 "$OUT_DIR/favicon-96.png"

# Create multi-size ICO (common fallback)
magick "$OUT_DIR/Reso_Logo_trim.png" -define icon:auto-resize=64,48,32,16 "$OUT_DIR/favicon.ico"

# Cleanup intermediate
rm -f "$OUT_DIR/Reso_Logo_trim.png"

echo "Favicons generated in $OUT_DIR/"
