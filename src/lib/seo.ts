import { canonicalHref } from '../consts';

/** Locale root path (`/` or `/de/` …) for breadcrumbs & JSON-LD. */
export function localeHomePath(locale: string): string {
  return locale === 'en' ? '/' : `/${locale}/`;
}

/** Strip branding suffix from page `<title>` for breadcrumb labels. */
export function breadcrumbNameFromPageTitle(title: string): string {
  const s = title.split('|')[0]?.trim() ?? title;
  return s.length > 90 ? `${s.slice(0, 87)}…` : s;
}

export function breadcrumbListLd(
  site: URL | undefined,
  crumbs: ReadonlyArray<{ name: string; path: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonicalHref(site, c.path),
    })),
  };
}
