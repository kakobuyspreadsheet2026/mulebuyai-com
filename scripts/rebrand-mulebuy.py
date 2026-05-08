#!/usr/bin/env python3
"""One-off rebrand from predecessor spreadsheet-hub sources → mulebuyai.com / Mulebuy Spreadsheet hub."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

SKIP_DIRS = {'.git', 'node_modules', 'dist', '.astro'}

EXTS = {
    '.ts',
    '.tsx',
    '.astro',
    '.mjs',
    '.json',
    '.md',
    '.example',
    '.css',
    '.txt',
}


def should_skip(path: Path) -> bool:
    parts = set(path.parts)
    return bool(parts & SKIP_DIRS)


def transform(text: str) -> str:
    # Order matters — tokens and multi-token strings first
    text = text.replace('kakobuy-cn.com', 'mulebuyai.com')
    text = text.replace('kakobuy-cn-com', 'mulebuyai-com')
    text = text.replace('redditKakobuyShareSummaries', 'redditMulebuyShareSummaries')
    text = text.replace('officialKakobuyNoticeExcerpts', 'officialMulebuyNoticeExcerpts')
    text = text.replace('kakobuyMay2026Promotion', 'mulebuyMay2026Promotion')
    text = text.replace('PUBLIC_KAKOBUY_', 'PUBLIC_MULEBUY_')
    text = text.replace('mlSpreadsheetKakobuy', 'mlSpreadsheetMulebuy')
    text = text.replace('/spreadsheet/kakobuy', '/spreadsheet/mulebuy')
    text = text.replace('kakobuyHomeUrl', 'mulebuyHomeUrl')
    text = text.replace('kakobuyIssueUrl', 'mulebuyIssueUrl')
    text = text.replace('{kakobuyUrl}', '{mulebuyUrl}')
    text = text.replace('urls.kakobuyUrl', 'urls.mulebuyUrl')
    text = text.replace('kakobuyUrl?:', 'mulebuyUrl?:')
    text = text.replace('defaultKakobuyDiscordUrl', 'defaultMulebuyDiscordUrl')
    text = text.replace('kakobuyTopBannerImageUrl', 'mulebuyTopBannerImageUrl')
    text = text.replace('kakobuyTopBannerInnerMaxPx', 'mulebuyTopBannerInnerMaxPx')
    text = text.replace('kakobuyHomeHeroBannerUrl', 'mulebuyHomeHeroBannerUrl')
    text = text.replace('kakobuyHomeTopStripBannerUrl', 'mulebuyHomeTopStripBannerUrl')
    text = text.replace('KAKOBUY_HELP_HUB', 'MULEBUY_HELP_HUB')
    text = text.replace('KAKOBUY_HOME', 'MULEBUY_HOME')

    text = text.replace('https://www.kakobuy.com', 'https://www.mulebuy.com')
    text = text.replace('https://kakobuy.com', 'https://mulebuy.com')
    text = text.replace('nstatic.kakobuy.com', 'nstatic.mulebuy.com')
    text = text.replace('/promotions/kakobuy-may-2026', '/promotions/mulebuy-may-2026')
    text = text.replace('kakobuy-may-2026', 'mulebuy-may-2026')

    # Blog slug segments (folders renamed separately)
    text = text.replace('kakobuy-coupons', 'mulebuy-coupons')
    text = text.replace('kakobuy-spreadsheet-qc', 'mulebuy-spreadsheet-qc')
    text = text.replace('kakobuy-spreadsheet-reddit', 'mulebuy-spreadsheet-reddit')
    text = text.replace('kakobuy-discord', 'mulebuy-discord')
    text = text.replace('kakobuy-weidian', 'mulebuy-weidian')
    text = text.replace('kakobuy-taobao', 'mulebuy-taobao')
    text = text.replace('kakobuy-1688', 'mulebuy-1688')

    text = text.replace('Kakobuy', 'Mulebuy')
    text = text.replace('kakobuy', 'mulebuy')

    return text


def main() -> None:
    for path in ROOT.rglob('*'):
        if path.is_dir() or should_skip(path):
            continue
        if path.suffix.lower() not in EXTS:
            continue
        if path.name in {'rebrand-kakobuy.py', 'rebrand-mulebuy.py'}:
            continue
        raw = path.read_text(encoding='utf-8')
        out = transform(raw)
        if out != raw:
            path.write_text(out, encoding='utf-8')


if __name__ == '__main__':
    main()
