from pathlib import Path
import re
import sys

import requests


def main() -> int:
    if len(sys.argv) < 3:
        print("usage: extract_maps_images.py <maps_url> <dest_dir>")
        return 1

    maps_url = sys.argv[1]
    dest_dir = Path(sys.argv[2])
    dest_dir.mkdir(parents=True, exist_ok=True)

    html = requests.get(
        maps_url,
        headers={"User-Agent": "Mozilla/5.0"},
        timeout=30,
    ).text

    urls = sorted(
        {
            match
            for match in re.findall(r"https://lh[0-9]+\.googleusercontent\.com/[^\s\"'<>]+", html)
            if "googleusercontent.com" in match
        }
    )

    print(f"found {len(urls)} candidate urls")
    for url in urls[:10]:
        print(url)

    downloaded = 0
    for index, url in enumerate(urls[:5], start=1):
        clean_url = re.sub(r"=w\d+-h\d+-k-no.*$", "", url)
        response = requests.get(clean_url, headers={"User-Agent": "Mozilla/5.0"}, timeout=30)
        if response.status_code == 200 and response.content:
            target = dest_dir / f"san-nicola-{index}.jpg"
            target.write_bytes(response.content)
            print(f"saved {target}")
            downloaded += 1

    print(f"downloaded {downloaded} images")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
