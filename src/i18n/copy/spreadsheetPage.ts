import type { RouteLocale } from '../config';
import type { SpreadsheetPageCopy } from './spreadsheetCopy.types';
import { en } from './spreadsheetLocales/en';
import { de } from './spreadsheetLocales/de';
import { pt } from './spreadsheetLocales/pt';
import { es } from './spreadsheetLocales/es';
import { fr } from './spreadsheetLocales/fr';
import { it } from './spreadsheetLocales/it';
import { pl } from './spreadsheetLocales/pl';

export type {
  SpreadsheetBlurb,
  SpreadsheetFaq,
  SpreadsheetPageCopy,
  SpreadsheetPreviewCard,
} from './spreadsheetCopy.types';

type HydrateCtx = { ml: string; howTo: string; news: string };

function hydrateStr(s: string, ctx: HydrateCtx): string {
  return s
    .replaceAll('{ml}', ctx.ml)
    .replaceAll('{howToUrl}', ctx.howTo)
    .replaceAll('{newsUrl}', ctx.news)
    .replaceAll('{mulebuyUrl}', 'https://mulebuy.com/');
}

export function hydrateSpreadsheetCopy(
  raw: SpreadsheetPageCopy,
  mlHref: string,
  howToHref: string,
  newsHref: string,
): SpreadsheetPageCopy {
  const ctx: HydrateCtx = { ml: mlHref, howTo: howToHref, news: newsHref };
  return {
    ...raw,
    introHtml: hydrateStr(raw.introHtml, ctx),
    whatIsBodyHtml: hydrateStr(raw.whatIsBodyHtml, ctx),
    previewIntroHtml: hydrateStr(raw.previewIntroHtml, ctx),
    bottomCtaIntroHtml: hydrateStr(raw.bottomCtaIntroHtml, ctx),
    faqs: raw.faqs.map((f) => ({
      ...f,
      aHtml: hydrateStr(f.aHtml, ctx),
    })),
  };
}

export const SPREADSHEET_PAGE_COPY: Record<RouteLocale, SpreadsheetPageCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getSpreadsheetPageCopy(locale: string): SpreadsheetPageCopy {
  const lc = locale as RouteLocale;
  return SPREADSHEET_PAGE_COPY[lc] ?? en;
}
