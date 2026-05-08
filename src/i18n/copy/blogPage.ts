import type { RouteLocale } from '../config';

export type BlogPageCopy = {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  introHtml: string;
};

const en: BlogPageCopy = {
  title: 'Blog · fresh essays on Mulebuy spreadsheet workflows | mulebuyai.com',
  description:
    'Long-form originals about Spreadsheet-indexed discovery, paste hygiene, warehouse QC literacy, and freight realism—published independently of Mulebuy checkout.',
  keywords:
    'Mulebuy spreadsheet blog, sourcing essays, QC freight notes, agent paste literacy',
  h1: 'Blog',
  introHtml: `<p class="section-intro">Articles below are rewritten for mulebuyai.com—different framing from legacy hub clones. Older entries accumulate downward as we publish.</p>`,
};

/** Nav label stays “Blog”; body copy follows locale where translated. */
const byLocale: Record<RouteLocale, BlogPageCopy> = {
  en,
  de: {
    ...en,
    title: 'Blog · neue Essays zum Mulebuy-Spreadsheet | mulebuyai.com',
    description:
      'Längere Originaltexte zu indexiertem Browse, Link-Hygiene, Lager-QC und Frachtrealismus — unabhängig vom Mulebuy-Checkout.',
    keywords:
      'Mulebuy Spreadsheet Blog, Sourcing Essays, QC Fracht',
    introHtml: `<p class="section-intro">Die Texte wurden für mulebuyai.com neu gefasst — bewusst andere Perspektive als ältere Hub-Kopien. Ältere Beiträge sammeln sich nach unten.</p>`,
  },
  pt: {
    ...en,
    title: 'Blog · ensaios sobre fluxos Mulebuy Spreadsheet | mulebuyai.com',
    description:
      'Textos longos originais sobre descoberta indexada, higiene de links, QC e frete — independentes do checkout Mulebuy.',
    keywords: 'Blog Mulebuy Spreadsheet, ensaios sourcing',
    introHtml: `<p class="section-intro">Artigos reescritos para mulebuyai.com — enquadramento distinto de clones antigos. O arquivo cresce para baixo.</p>`,
  },
  es: {
    ...en,
    title: 'Blog · ensayos sobre flujos Mulebuy Spreadsheet | mulebuyai.com',
    description:
      'Ensayos largos sobre descubrimiento indexado, higiene de enlaces, QC y flete — independientes del checkout Mulebuy.',
    keywords: 'Blog Mulebuy Spreadsheet, ensayos sourcing',
    introHtml: `<p class="section-intro">Textos rehechos para mulebuyai.com — marco distinto a hubs clonados. El archivo crece hacia abajo.</p>`,
  },
  fr: {
    ...en,
    title: 'Blog · essais sur les workflows Mulebuy Spreadsheet | mulebuyai.com',
    description:
      'Articles longs sur découverte indexée, hygiène de liens, QC entrepôt et fret réaliste — hors checkout Mulebuy.',
    keywords: 'Blog Mulebuy Spreadsheet, essais sourcing',
    introHtml: `<p class="section-intro">Articles réécrits pour mulebuyai.com — cadrage différent des anciens clones. L’archive s’étend vers le bas.</p>`,
  },
  it: {
    ...en,
    title: 'Blog · saggi sui workflow Mulebuy Spreadsheet | mulebuyai.com',
    description:
      'Saggi lunghi su discovery indicizzata, igiene dei link, QC magazzino e spedizioni realistiche — fuori dal checkout Mulebuy.',
    keywords: 'Blog Mulebuy Spreadsheet, saggi sourcing',
    introHtml: `<p class="section-intro">Testi riscritti per mulebuyai.com — impostazione diversa dai clone storici. L’archivio scorre verso il basso.</p>`,
  },
  pl: {
    ...en,
    title: 'Blog · eseje o workflow Mulebuy Spreadsheet | mulebuyai.com',
    description:
      'Dłuższe oryginały o indeksowanym przeglądzie, higienie linków, QC i realnym frachcie — niezależnie od kasy Mulebuy.',
    keywords: 'Blog Mulebuy Spreadsheet, eseje sourcing',
    introHtml: `<p class="section-intro">Teksty przepisane pod mulebuyai.com — inna perspektywa niż stare klony. Archiwum rośnie w dół.</p>`,
  },
};

export function getBlogCopy(locale: string): BlogPageCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
