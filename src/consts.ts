export const ml = 'https://maisonlooks.com/en';

/** English catalogue base URL for Mulebuy Spreadsheet browse (site primary locale). */
export const mlSpreadsheetMulebuy = `${ml}/spreadsheet/mulebuy`;

/**
 * Google `SearchAction` template — matches `MaisonLooksSearchBar` (`method="get"`, `name="q"` → `/search?q=`).
 */
export const mlSpreadsheetMulebuySearchTemplate = `${mlSpreadsheetMulebuy.replace(/\/$/, '')}/search?q={search_term_string}`;

/** Site branding (aligned with `<meta property="og:site_name">` and JSON-LD). */
export const siteName = 'Mulebuy Spreadsheet Hub';

/**
 * Append to favicon URLs in `<head>` whenever `public/favicon.png` / `public/favicon.ico` change.
 * Browsers and CDNs cache favicons aggressively without this.
 */
export const faviconCacheBust = '?v=mulebuy-purple-official';

/** Full-width PC top carousel strip — mirrored under `public/images/mulebuy-promo/`. */
export const mulebuyTopBannerImageUrl = '/images/mulebuy-promo/top-banner.png';

/** Default tap-through for the top banner (official site). */
export const mulebuyTopBannerHref = 'https://mulebuy.com/';

/**
 * Homepage hero backdrop (desktop) — mirrored under `public/images/mulebuy-promo/`.
 * Phones (`≤640px`): `MulebuyHomeHero` swaps this out for a CSS gradient-only backdrop.
 */
export const mulebuyHomeHeroBannerUrl = '/images/mulebuy-promo/hero-bg.png';

/** Default Discord invite (TOP banner `/join/discord` redirect + floating dock). Override with `PUBLIC_MULEBUY_DISCORD_URL` or `PUBLIC_FLOAT_DISCORD_URL`. */
export const defaultMulebuyDiscordUrl = 'https://discord.com/invite/9hrqg53zgs';

/** Maison Looks companion Discord — homepage bento carousel slides 2 & 3. */
export const maisonlooksDiscordInviteUrl = 'https://discord.com/invite/9hrqg53zgs';

/** Mirrored Mulebuy app “Raise A Kitty” notice — homepage bento carousel slide 1 & News banner strip tap 0. */
export const mulebuyRaiseAKittyPromoHref = '/promotions/mulebuy-raise-a-kitty';

/** Mirrored Global Creators Program event — homepage bento right rail tall tile. */
export const mulebuyGlobalCreatorsProgramHref = '/promotions/mulebuy-global-creators-program';

/**
 * Homepage bento — artwork served from `public/images/mulebuy-promo/` (no hotlink dependency).
 */
export const mulebuyHomeBentoCarouselSlides: ReadonlyArray<{
  imageUrl: string;
  href: string;
  alt: string;
  kicker: string;
  title: string;
  hint: string;
}> = [
  {
    imageUrl: '/images/mulebuy-promo/carousel-0.jpg',
    href: mulebuyRaiseAKittyPromoHref,
    alt: 'Raise A Kitty promotion — full activity copy on this hub',
    kicker: 'Event',
    title: 'Raise A Kitty · mirrored rules',
    hint: 'Tap for full prize copy · participate in the Mulebuy app',
  },
  {
    imageUrl: '/images/mulebuy-promo/carousel-1.png',
    href: maisonlooksDiscordInviteUrl,
    alt: 'Discord promotion — opens Maison Looks community invite',
    kicker: 'Community',
    title: 'Giveaways & shipping chatter',
    hint: 'Opens discord.com invite · confirm perks with server mods',
  },
  {
    imageUrl: '/images/mulebuy-promo/carousel-2.png',
    href: maisonlooksDiscordInviteUrl,
    alt: 'Discord creators promotion — opens Maison Looks invite',
    kicker: 'Community',
    title: 'Creator chat & programme notes',
    hint: 'Same Discord hub · official rules still on mulebuy.com',
  },
];

/** Bento middle column (mulebuy.com PC): wide GIF on top, two tiles below. */
export const mulebuyHomeBentoMiddleTopGifUrl = '/images/mulebuy-promo/bento-middle-top.gif';

export const mulebuyHomeBentoMiddleBottomLeftPngUrl = '/images/mulebuy-promo/bento-bottom-left.png';

export const mulebuyHomeBentoMiddleBottomRightPngUrl = '/images/mulebuy-promo/bento-bottom-right.png';

/** Right-column tall tile — mulebuy.com PC `home-middle-ad-pc-right`. */
export const mulebuyHomeBentoRightRailImageUrl = '/images/mulebuy-promo/bento-right-rail.png';

/** Community subreddit referenced across the hub (floating dock, stubs). Override Reddit URL via `PUBLIC_FLOAT_REDDIT_URL` where applicable. */
export const defaultCommunityRedditUrl = 'https://www.reddit.com/r/mulebuyfinds/';

/** Default WhatsApp deep link for floating dock; override with `PUBLIC_FLOAT_WHATSAPP_URL`. */
export const defaultFloatingWhatsappUrl = 'https://wa.me/447594927259';

/**
 * Default floating-dock intro MP4. Remote asset is very large (~350MB); keep hotlinked or set
 * `PUBLIC_FLOAT_VIDEO_URL` to a shorter clip or same-origin path under `public/` if you mirror it.
 */
export const defaultFloatingIntroVideoUrl = 'https://img1.mulebuy.com/video/home_top.MP4';

/**
 * Default Open Graph / Twitter preview image (public path, resolved with `Astro.site`).
 * Standard 1200×630 for large social link previews.
 */
export const defaultOgImagePath = '/og-default.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Logo for JSON-LD `Organization` (min ~112×112 recommended; we use 512×512 PNG). */
export const structuredDataLogoPath = '/logo-512.png';
export const structuredDataLogoWidth = 512;
export const structuredDataLogoHeight = 512;

/** Stable JSON-LD `@id`s — must stay in sync with `src/layouts/Layout.astro`. */
export function siteStructuredDataIds(siteOrigin: string) {
  const o = siteOrigin.replace(/\/$/, '');
  return {
    organizationId: `${o}/#organization`,
    websiteId: `${o}/#website`,
  } as const;
}

/** Absolute page URL with trailing slash (matches `Layout` canonical + `@astrojs/sitemap`); root stays `/`. */
export function canonicalHref(site: URL | undefined, pathOrUrl: string): string {
  const u =
    pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')
      ? new URL(pathOrUrl)
      : new URL(pathOrUrl, site ?? new URL('https://mulebuyai.com'));
  if (u.pathname !== '/' && !u.pathname.endsWith('/')) {
    u.pathname += '/';
  }
  return u.href;
}
