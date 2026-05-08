#!/usr/bin/env python3
"""Download galleryImageUrls from redditMulebuyShareSummaries.json into public/images/reddit-buyer-shares/."""
from __future__ import annotations

import json
import pathlib
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "src/data/redditMulebuyShareSummaries.json"
OUT_BASE = ROOT / "public/images/reddit-buyer-shares"
UA = {"User-Agent": "Mozilla/5.0 (compatible; mulebuyai-static-mirror/1.0)"}


def main() -> None:
    OUT_BASE.mkdir(parents=True, exist_ok=True)
    with JSON_PATH.open(encoding="utf-8") as f:
        data = json.load(f)

    for ti, entry in enumerate(data):
        urls = entry.get("galleryImageUrls") or []
        thread_dir = OUT_BASE / str(ti)
        thread_dir.mkdir(parents=True, exist_ok=True)
        new_urls: list[str] = []
        for ii, url in enumerate(urls):
            if url.startswith("/"):
                new_urls.append(url)
                continue
            path_part = url.split("?")[0]
            ext = pathlib.Path(path_part).suffix.lower()
            if ext not in (".jpg", ".jpeg", ".png", ".gif", ".webp"):
                ext = ".jpg"
            fname = f"{ii + 1:02d}{ext}"
            dest = thread_dir / fname
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=180) as resp:
                dest.write_bytes(resp.read())
            new_urls.append(f"/images/reddit-buyer-shares/{ti}/{fname}")
        entry["galleryImageUrls"] = new_urls

    with JSON_PATH.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print("Wrote", JSON_PATH)


if __name__ == "__main__":
    main()
