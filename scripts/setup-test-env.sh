#!/usr/bin/env bash
# Prepare a Playwright-capable Chromium in environments without root access.
#
# Playwright's `install-deps` needs root. Where sudo is unavailable, this script
# downloads the missing shared libraries and a font set into $HOME, then installs
# the Playwright browser. Re-run it after restoring the workspace, because system
# packages and caches are not archived.
#
# Usage:
#   bash scripts/setup-test-env.sh
#   export LD_LIBRARY_PATH="$HOME/libs"
#   export FONTCONFIG_FILE="$HOME/fonts.conf"
#   bunx playwright test
set -euo pipefail

HOME_DIR="${HOME:-/workspace/homes/$(id -un)}"
WORK="$(mktemp -d)"
mkdir -p "$HOME_DIR/libs" "$HOME_DIR/fonts"

packages="libnspr4 libnss3 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
libasound2t64 libatk1.0-0t64 libatk-bridge2.0-0t64 libatspi2.0-0t64 \
libxkbcommon0 libxres1 libxi6 libxrender1"

for pkg in $packages; do
  file=$(curl -s "https://packages.ubuntu.com/noble/amd64/${pkg}/download" \
    | grep -oE "[a-z0-9.+~-]+_[^\"<> ]+_amd64\.deb" | head -1)
  if [ -z "$file" ]; then
    echo "could not resolve $pkg"
    continue
  fi
  for dir in a/alsa-lib a/at-spi2-core n/nspr n/nss \
    libx/libxcomposite libx/libxdamage libx/libxfixes libx/libxrandr \
    libx/libxkbcommon libx/libxres libx/libxi libx/libxrender; do
    if curl -sf -o "$WORK/$file" "http://archive.ubuntu.com/ubuntu/pool/main/$dir/$file"; then
      break
    fi
  done
done

for deb in "$WORK"/*.deb; do
  dpkg-deb -x "$deb" "$WORK/root"
done
cp -a "$WORK/root/usr/lib/x86_64-linux-gnu/." "$HOME_DIR/libs/"

font=$(curl -s "https://packages.ubuntu.com/noble/all/fonts-dejavu-core/download" \
  | grep -oE "fonts-dejavu-core_[^\"<> ]+_all\.deb" | head -1)
curl -sf -o "$WORK/$font" "http://archive.ubuntu.com/ubuntu/pool/main/f/fonts-dejavu/$font"
dpkg-deb -x "$WORK/$font" "$WORK/fontroot"
cp -a "$WORK/fontroot/usr/share/fonts/truetype/dejavu/." "$HOME_DIR/fonts/"

cat > "$HOME_DIR/fonts.conf" <<XML
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>$HOME_DIR/fonts</dir>
  <cachedir>/tmp/fontcache</cachedir>
</fontconfig>
XML

bunx playwright install chromium

echo "Ready. Export LD_LIBRARY_PATH=$HOME_DIR/libs and FONTCONFIG_FILE=$HOME_DIR/fonts.conf"
