import homeCategoryBannersData from '../data/homeCategoryBanners.json';
import {
  maisonlooksDiscordInviteUrl,
  ml,
  mulebuyGlobalCreatorsProgramHref,
  mulebuyRaiseAKittyPromoHref,
} from '../consts';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type HomeCategoryBannerRow = (typeof homeCategoryBannersData)[number] & { href?: string };

/** Seven tap URLs for the homepage / News banner strip — keep `NewsPageBody` card CTAs in lockstep. */
export function homeCategoryBannerTapUrls(locale: string) {
  const howToHref = getRelativeLocaleUrl(locale, 'how-to-buy');
  return [
    mulebuyRaiseAKittyPromoHref,
    maisonlooksDiscordInviteUrl,
    maisonlooksDiscordInviteUrl,
    maisonlooksDiscordInviteUrl,
    ml,
    howToHref,
    mulebuyGlobalCreatorsProgramHref,
  ] as const;
}

/**
 * Homepage / News promo strip: pairs each banner asset with its tap target.
 * Order mirrors homepage hero bento: carousel ×3, middle GIF, Maison Looks home, How to buy, right-rail Global Creators Program.
 */
export function homeCategoryBannersWithHrefs(locale: string): HomeCategoryBannerRow[] {
  const hrefs = homeCategoryBannerTapUrls(locale);

  return homeCategoryBannersData.map((b, i) => ({
    ...b,
    ...(hrefs[i] ? { href: hrefs[i]! } : {}),
  }));
}
