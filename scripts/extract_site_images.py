from pathlib import Path
from urllib.parse import urljoin
import re
import sys

import requests


def main() -> int:
    if len(sys.argv) < 3:
      print("usage: extract_site_images.py <site_url> <dest_dir>")
      return 1

    site_url = sys.argv[1]
    dest_dir = Path(sys.argv[2])
    dest_dir.mkdir(parents=True, exist_ok=True)

    html = requests.get(site_url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30).text
    matches = re.findall(r"""(?:src|href)=["']([^"']+\.(?:jpg|jpeg|png|webp))["']""", html, re.I)
    urls = []
    for match in matches:
        full = urljoin(site_url, match)
        if full not in urls:
            urls.append(full)

    print(f"found {len(urls)} image urls")
    for url in urls[:20]:
        print(url)

    downloaded = 0
    for index, url in enumerate(urls[:6], start=1):
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30)
        if response.status_code == 200 and response.content:
            suffix = Path(url).suffix or ".jpg"
            target = dest_dir / f"site-{index}{suffix}"
            target.write_bytes(response.content)
            print(f"saved {target}")
            downloaded += 1

    print(f"downloaded {downloaded} images")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
