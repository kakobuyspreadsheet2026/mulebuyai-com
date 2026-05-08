/** Canonical phrase injected into image alternative text site-wide (SEO / accessibility). */
export const MULEBUY_SPREADSHEET_ALT_FRAGMENT = 'Mulebuy Spreadsheet';

const HAS_MULEBUY_SPREADSHEET = /mulebuy\s+spreadsheet/i;

/**
 * Ensures `alt` includes **Mulebuy Spreadsheet** once (case-insensitive match).
 * Empty strings become the fragment alone so purely decorative imgs still announce context.
 */
export function withMulebuySpreadsheetAlt(alt: string | undefined | null): string {
  const trimmed = typeof alt === 'string' ? alt.trim() : '';
  if (!trimmed) {
    return MULEBUY_SPREADSHEET_ALT_FRAGMENT;
  }
  if (HAS_MULEBUY_SPREADSHEET.test(trimmed)) {
    return trimmed;
  }
  return `${trimmed} · ${MULEBUY_SPREADSHEET_ALT_FRAGMENT}`;
}
