#!/usr/bin/env bash
# Regenerates src/data/placeholders.js from public/images.
# Run after adding, removing, or replacing any photograph.
set -euo pipefail

cd "$(dirname "$0")/.."
TMP=$(mktemp -d)
OUT="src/data/placeholders.js"
trap 'rm -rf "$TMP"' EXIT

{
  echo "/* Tiny blurred previews, inlined so images resolve from a blur instead of"
  echo "   popping in. Generated from public/images at 20px wide — regenerate with"
  echo "   scripts/gen-placeholders.sh if the photography changes. */"
  echo ""
  echo "export const placeholders = {"
} > "$OUT"

for f in public/images/*.jpg; do
  name=$(basename "$f")
  cp "$f" "$TMP/t.jpg"
  sips -Z 20 "$TMP/t.jpg" --out "$TMP/s.jpg" >/dev/null 2>&1
  b64=$(base64 -i "$TMP/s.jpg" | tr -d '\n')
  echo "  \"/images/$name\": \"data:image/jpeg;base64,$b64\"," >> "$OUT"
done

echo "};" >> "$OUT"
echo "Wrote $(grep -c 'data:image' "$OUT") placeholders to $OUT"
