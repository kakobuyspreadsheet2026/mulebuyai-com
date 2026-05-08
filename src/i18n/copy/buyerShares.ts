import type { RouteLocale } from '../config';

export type BuyerSharesGalleryUi = {
  buyerKind: string;
  shippingKind: string;
  defaultBase: string;
  /** Placeholders: `{kind}`, `{title}`, `{i}`, `{n}` (1-based index). */
  altPattern: string;
};

export type BuyerSharesCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Embed `<a href="{newsUrl}" …>` and `<a href="{howToUrl}" …>` (anchor copy localized per locale). */
  leadHtml: string;
  /** Usually `<a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">… localized label …</a>`. */
  disclaimerHtml: string;
  gallery: BuyerSharesGalleryUi;
};

const en: BuyerSharesCopy = {
  title: 'Buyer shares · Reddit field notes around Mulebuy spreadsheet flows | mulebuyai.com',
  description:
    'Fresh editorial digest (2026): community threads about Spreadsheet-sourced URLs, Mulebuy intake timing, QC comparisons, and courier experiments—not corporate messaging.',
  keywords:
    'Mulebuy spreadsheet Reddit digest, buyer QC timeline, FashionReps haul notes, Weidian spreadsheet anecdotes',
  backHomeLabel: '← Back to home',
  h1: 'Buyer shares',
  leadHtml: `Each wide card condenses <strong>buyer-written Reddit posts that mention Spreadsheet browsing before Mulebuy checkout</strong>: haul galleries, packing critiques, QC disagreements, or <strong>carrier experiments</strong>. Newest editorial summaries float to the top; the sky rail highlights time-sensitive routes. Official excerpts stay mirrored under <a href="{newsUrl}">News &amp; guides</a>; procedural beats live in <a href="{howToUrl}">How to buy</a>.`,
  disclaimerHtml: `<strong>Disclaimer:</strong> Crowdsourced prose—not reviewed by mulebuyai.com or Mulebuy HQ. Threads decay quickly; authoritative pricing/policy answers remain inside <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">your logged-in Mulebuy session</a>.`,
  gallery: {
    buyerKind: 'haul digest',
    shippingKind: 'route diary',
    defaultBase: 'Mulebuy Spreadsheet · Reddit field notes',
    altPattern:
      'Mulebuy Spreadsheet · Reddit field notes · {kind} · {title} · frame {i}/{n}',
  },
};

const de: BuyerSharesCopy = {
  title: 'Käufer-Stimmen · Reddit-Notizen zum Mulebuy-Spreadsheet-Weg | mulebuyai.com',
  description:
    'Neuer Überblick (2026): Community-Fäden zu Spreadsheet-URLs, Mulebuy-Intake, QC und Versuchsrouten — keine offizielle Mulebuy-Kommunikation.',
  keywords:
    'Mulebuy Spreadsheet Reddit, Haul Digest Deutschland, QC Timeline',
  backHomeLabel: '← Zur Startseite',
  h1: 'Käufer-Stimmen',
  leadHtml: `Breite Karten fassen <strong>Reddit-Posts zusammen, die Spreadsheet-Recherche vor dem Mulebuy-Checkout erwähnen</strong> — Galerien, Packshots, QC-Streit oder <strong>Courier-Experimente</strong>. Frische Redaktionsupdates stehen oben; die blaue Leiste markiert zeitkritische Routen. Offizielle Auszüge unter <a href="{newsUrl}">News &amp; Anleitungen</a>; Ablauf unter <a href="{howToUrl}">So kaufen</a>.`,
  disclaimerHtml: `<strong>Hinweis:</strong> Nur Community-Inhalt. Verbindliche Daten immer bei <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">Mulebuy eingeloggt prüfen</a>.`,
  gallery: {
    buyerKind: 'Haul-Digest',
    shippingKind: 'Routen-Tagebuch',
    defaultBase: 'Mulebuy Spreadsheet · Reddit Feldnotizen',
    altPattern: 'Mulebuy Spreadsheet · Reddit Feldnotizen · {kind} · {title} · Bild {i}/{n}',
  },
};

const pt: BuyerSharesCopy = {
  title: 'Voz dos compradores · Reddit e fluxo spreadsheet→Mulebuy | mulebuyai.com',
  description:
    'Resumo novo (2026): tópicos sobre URLs vindas de spreadsheets, intake Mulebuy, QC e correios — texto editorial.',
  keywords:
    'Mulebuy spreadsheet Reddit, haul digest, linha do tempo envio',
  backHomeLabel: '← Voltar ao início',
  h1: 'Voz dos compradores',
  leadHtml: `Cada cartão largo resume <strong>posts Reddit que citam spreadsheet antes do checkout Mulebuy</strong>: álbuns, debates QC ou <strong>testes de carrier</strong>. Atualizações editoriais novas no topo; faixa azul destaca prazos. Notas oficiais em <a href="{newsUrl}">Notícias &amp; guias</a>; passos em <a href="{howToUrl}">Como comprar</a>.`,
  disclaimerHtml: `<strong>Aviso:</strong> Conteúdo voluntário — confirme em <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">Mulebuy autenticado</a>.`,
  gallery: {
    buyerKind: 'digest haul',
    shippingKind: 'diário rota',
    defaultBase: 'Mulebuy Spreadsheet · notas Reddit',
    altPattern: 'Mulebuy Spreadsheet · notas Reddit · {kind} · {title} · foto {i}/{n}',
  },
};

const es: BuyerSharesCopy = {
  title: 'Historias de compradores · Reddit y spreadsheet→Mulebuy | mulebuyai.com',
  description:
    'Síntesis nueva (2026): hilos sobre URLs desde spreadsheets, intake Mulebuy, QC y mensajería — solo editorial.',
  keywords:
    'Mulebuy spreadsheet Reddit, haul digest, tránsito',
  backHomeLabel: '← Volver al inicio',
  h1: 'Historias de compradores',
  leadHtml: `Cada tarjeta resume <strong>hilos Reddit que mencionan spreadsheet antes de pagar en Mulebuy</strong>: fotos, debates QC o <strong>experimentos de paquetería</strong>. Lo más reciente arriba; franja azul para líneas urgentes. FAQ en <a href="{newsUrl}">Noticias &amp; guías</a>; cómo hacerlo en <a href="{howToUrl}">Cómo comprar</a>.`,
  disclaimerHtml: `<strong>Descargo:</strong> UGC sin validación corporativa — datos reales en <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">tu Mulebuy</a>.`,
  gallery: {
    buyerKind: 'digest haul',
    shippingKind: 'diario ruta',
    defaultBase: 'Mulebuy Spreadsheet · notas Reddit',
    altPattern: 'Mulebuy Spreadsheet · notas Reddit · {kind} · {title} · foto {i}/{n}',
  },
};

const fr: BuyerSharesCopy = {
  title: 'Retours acheteurs · Reddit & flux spreadsheet→Mulebuy | mulebuyai.com',
  description:
    'Synthèse neuve (2026) : fils Reddit sur URLs spreadsheet, intake Mulebuy, QC et transport — purement éditorial.',
  keywords:
    'Mulebuy spreadsheet Reddit, digest haul, chronologie fret',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Retours acheteurs',
  leadHtml: `Chaque carte résume <strong>des posts Reddit évoquant le spreadsheet avant paiement Mulebuy</strong> : albums, disputes QC ou <strong>essais transporteurs</strong>. Ajouts récents en tête ; bandeau bleu pour lignes sensibles au temps. Extraits officiels sous <a href="{newsUrl}">Actualités &amp; guides</a>, méthodo sous <a href="{howToUrl}">Comment acheter</a>.`,
  disclaimerHtml: `<strong>Avertissement :</strong> contributions brutes — vérifiez sur <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">Mulebuy connecté</a>.`,
  gallery: {
    buyerKind: 'digest haul',
    shippingKind: 'journal route',
    defaultBase: 'Mulebuy Spreadsheet · notes Reddit',
    altPattern: 'Mulebuy Spreadsheet · notes Reddit · {kind} · {title} · visuel {i}/{n}',
  },
};

const it: BuyerSharesCopy = {
  title: 'Voci acquirenti · Reddit e spreadsheet→Mulebuy | mulebuyai.com',
  description:
    'Riassunto nuovo (2026): thread su URL spreadsheet, intake Mulebuy, QC e corrieri — editoriale.',
  keywords:
    'Mulebuy spreadsheet Reddit, digest haul, cronologia spedizioni',
  backHomeLabel: '← Torna alla home',
  h1: 'Voci dagli acquistatori',
  leadHtml: `Ogni scheda condensa <strong>post Reddit che citano spreadsheet prima del checkout Mulebuy</strong>: foto, dibattiti QC o <strong>prove corriere</strong>. Aggiornamenti recenti in cima; fascia blu per narrazioni tempo-dipendenti. Notizie ufficiali in <a href="{newsUrl}">Notizie &amp; guide</a>; tutorial in <a href="{howToUrl}">Come acquistare</a>.`,
  disclaimerHtml: `<strong>Dichiarazione:</strong> contenuti volontari — verifica in <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">il tuo Mulebuy</a>.`,
  gallery: {
    buyerKind: 'digest haul',
    shippingKind: 'diario rotta',
    defaultBase: 'Mulebuy Spreadsheet · note Reddit',
    altPattern: 'Mulebuy Spreadsheet · note Reddit · {kind} · {title} · foto {i}/{n}',
  },
};

const pl: BuyerSharesCopy = {
  title: 'Głosy kupujących · Reddit i spreadsheet→Mulebuy | mulebuyai.com',
  description:
    'Nowy skrót (2026): wątki Reddit o URL z spreadsheetów, intake Mulebuy, QC i przewoźnikach — treść redakcyjna.',
  keywords:
    'Mulebuy spreadsheet Reddit, digest haul, czasy wysyłki',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Głosy kupujących',
  leadHtml: `Każda szeroka karta zbija <strong>posty Reddit wspominające spreadsheet przed płatnością Mulebuy</strong>: galerie, spory QC lub <strong>testy kurierów</strong>. Świeższe streszczenia na górze; niebieski pas dla historii czasowych. Oficjalne fragmenty w <a href="{newsUrl}">Aktualnościach i poradnikach</a>; instrukcja w <a href="{howToUrl}">Jak kupować</a>.`,
  disclaimerHtml: `<strong>Uwaga:</strong> treść społeczności — potwierdzaj w <a href="{mulebuyUrl}" target="_blank" rel="noopener noreferrer">panelu Mulebuy</a>.`,
  gallery: {
    buyerKind: 'digest haul',
    shippingKind: 'dziennik trasy',
    defaultBase: 'Mulebuy Spreadsheet · notatki Reddit',
    altPattern: 'Mulebuy Spreadsheet · notatki Reddit · {kind} · {title} · kadr {i}/{n}',
  },
};

export const BUYER_SHARES_COPY: Record<RouteLocale, BuyerSharesCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getBuyerSharesCopy(lc: string): BuyerSharesCopy {
  const locale = lc as RouteLocale;
  return BUYER_SHARES_COPY[locale] ?? en;
}

const MULEBUY_HOME = 'https://mulebuy.com/';

export function hydrateBuyerSharesCopy(
  raw: BuyerSharesCopy,
  urls: { newsUrl: string; howToUrl: string; mulebuyUrl?: string },
): BuyerSharesCopy {
  const agentHome = urls.mulebuyUrl ?? MULEBUY_HOME;
  return {
    ...raw,
    leadHtml: raw.leadHtml
      .replace(/\{newsUrl\}/g, urls.newsUrl)
      .replace(/\{howToUrl\}/g, urls.howToUrl),
    disclaimerHtml: raw.disclaimerHtml.replace(/\{mulebuyUrl\}/g, agentHome),
  };
}
