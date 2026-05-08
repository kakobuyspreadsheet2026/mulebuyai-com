import type { RouteLocale } from '../i18n/config';
import { DEFAULT_LOCALE } from '../i18n/config';
import buyingGuideDe from './howToBuyBuyingGuideBody.de.fragment.html?raw';
import buyingGuideEn from './howToBuyBuyingGuideBody.en.fragment.html?raw';
import buyingGuideEs from './howToBuyBuyingGuideBody.es.fragment.html?raw';
import buyingGuideFr from './howToBuyBuyingGuideBody.fr.fragment.html?raw';
import buyingGuideIt from './howToBuyBuyingGuideBody.it.fragment.html?raw';
import buyingGuidePl from './howToBuyBuyingGuideBody.pl.fragment.html?raw';
import buyingGuidePt from './howToBuyBuyingGuideBody.pt.fragment.html?raw';

export const HOW_TO_BUY_BUYING_GUIDE_HTML: Record<RouteLocale, string> = {
  en: buyingGuideEn,
  de: buyingGuideDe,
  pt: buyingGuidePt,
  es: buyingGuideEs,
  fr: buyingGuideFr,
  it: buyingGuideIt,
  pl: buyingGuidePl,
};

export function getHowToBuyBuyingGuideHtml(locale: string): string {
  const lc = locale as RouteLocale;
  return HOW_TO_BUY_BUYING_GUIDE_HTML[lc] ?? HOW_TO_BUY_BUYING_GUIDE_HTML[DEFAULT_LOCALE];
}
