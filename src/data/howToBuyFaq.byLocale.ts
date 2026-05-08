import type { RouteLocale } from '../i18n/config';
import { DEFAULT_LOCALE } from '../i18n/config';
import faqDe from './howToBuyFaq.de.fragment.html?raw';
import faqEn from './howToBuyFaq.en.fragment.html?raw';
import faqEs from './howToBuyFaq.es.fragment.html?raw';
import faqFr from './howToBuyFaq.fr.fragment.html?raw';
import faqIt from './howToBuyFaq.it.fragment.html?raw';
import faqPl from './howToBuyFaq.pl.fragment.html?raw';
import faqPt from './howToBuyFaq.pt.fragment.html?raw';

export const HOW_TO_BUY_FAQ_HTML: Record<RouteLocale, string> = {
  en: faqEn,
  de: faqDe,
  pt: faqPt,
  es: faqEs,
  fr: faqFr,
  it: faqIt,
  pl: faqPl,
};

export function getHowToBuyFaqHtml(locale: string): string {
  const lc = locale as RouteLocale;
  return HOW_TO_BUY_FAQ_HTML[lc] ?? HOW_TO_BUY_FAQ_HTML[DEFAULT_LOCALE];
}
