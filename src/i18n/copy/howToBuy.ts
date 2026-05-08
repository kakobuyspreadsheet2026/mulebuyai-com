import type { RouteLocale } from '../config';

export type HowToBuyCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Use `{ml}` for spreadsheet catalogue URL. */
  introHtml: string;
  /** Pink ribbon label above mirrored buying guide. */
  guideRibbonBadge: string;
  /** External link label → official Mulebuy buying guide. */
  guideSourceLabel: string;
  /** Short disclaimer; may include `{ml}` if needed later. */
  guideMirrorNoteHtml: string;
  faqH2: string;
  faqRibbonBadge: string;
  faqSourceLabel: string;
  faqMirrorNoteHtml: string;
};

const OFFICIAL_BUYING_GUIDE = 'https://mulebuy.com/footer-help/buying-guide';
const OFFICIAL_HELP_CENTER = 'https://mulebuy.com/help-center';

const en: HowToBuyCopy = {
  title: 'Mulebuy buying guide · mirrored steps | mulebuyai.com',
  description:
    'Mirrored “Get Started” flow from Mulebuy’s official buying guide: search, pay, domestic routing, warehouse QC, international shipping, tracking — confirm coupons and rules while logged in on mulebuy.com.',
  keywords:
    'Mulebuy buying guide, how to order Taobao Weidian 1688, warehouse QC, international shipping Mulebuy',
  backHomeLabel: '← Back to home',
  h1: 'How to buy',
  introHtml: `Browse SKUs through <a href="{ml}" target="_blank" rel="noopener noreferrer">Spreadsheet-indexed catalogue lanes</a>, then complete checkout, domestic payments, and QC exclusively inside <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. Labels change — trust your authenticated session.`,
  guideRibbonBadge: 'Buying guide · mirrored',
  guideSourceLabel: 'Live guide on mulebuy.com ↗',
  guideMirrorNoteHtml: `These steps mirror <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">Mulebuy’s official buying guide</a>. If anything disagrees with today’s live page, prefer Mulebuy.`,
  faqH2: 'Frequently asked questions',
  faqRibbonBadge: 'FAQ · mirrored',
  faqSourceLabel: 'Live help center on mulebuy.com ↗',
  faqMirrorNoteHtml: `This FAQ mirrors <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">Mulebuy’s help center</a>. If anything differs, prefer the live page.`,
};

const de: HowToBuyCopy = {
  title: 'Mulebuy Buying Guide · gespiegelte Schritte | mulebuyai.com',
  description:
    'Gespiegelter Ablauf aus dem offiziellen Mulebuy-Leitfaden: Suche, Zahlung, Inland, Lager-QC, internationaler Versand — Regeln live auf mulebuy.com prüfen.',
  keywords:
    'Mulebuy Leitfaden, Taobao Weidian bestellen, QC Magazin Mulebuy',
  backHomeLabel: '← Zur Startseite',
  h1: 'So kaufen',
  introHtml: `SKUs über <a href="{ml}" target="_blank" rel="noopener noreferrer">den indexierten Spreadsheet-Browse</a> finden; Checkout, Inlandzahlungen und QC nur bei <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. Beschriftungen ändern sich — der eingeloggte Stand zählt.`,
  guideRibbonBadge: 'Leitfaden · Spiegel',
  guideSourceLabel: 'Live-Leitfaden auf mulebuy.com ↗',
  guideMirrorNoteHtml: `Die folgenden Schritte spiegeln den <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">offiziellen Mulebuy-Leitfaden</a>. Bei Abweichungen gilt die Live-Seite.`,
  faqH2: 'Häufig gestellte Fragen',
  faqRibbonBadge: 'FAQ · Spiegel',
  faqSourceLabel: 'Live-Hilfecenter auf mulebuy.com ↗',
  faqMirrorNoteHtml: `Diese FAQ spiegelt das <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">Mulebuy-Hilfecenter</a>. Bei Abweichungen gilt die Live-Seite.`,
};

const pt: HowToBuyCopy = {
  title: 'Guia de compra Mulebuy · passos espelhados | mulebuyai.com',
  description:
    'Fluxo espelhado do guia oficial Mulebuy: pesquisa, pagamento, armazém, envio internacional — confirme regras em sessão mulebuy.com.',
  keywords:
    'guia Mulebuy, como comprar Taobao Weidian, QC armazém',
  backHomeLabel: '← Voltar ao início',
  h1: 'Como comprar',
  introHtml: `Explore SKUs via <a href="{ml}" target="_blank" rel="noopener noreferrer">catálogo indexado estilo spreadsheet</a>; finalize checkout e QC apenas em <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. Etiquetas mudam — siga a sessão autenticada.`,
  guideRibbonBadge: 'Guia · espelho',
  guideSourceLabel: 'Guia ao vivo em mulebuy.com ↗',
  guideMirrorNoteHtml: `Os passos abaixo espelham o <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">guia oficial da Mulebuy</a>. Em caso de divergência, prevalece a página ao vivo.`,
  faqH2: 'Perguntas frequentes',
  faqRibbonBadge: 'FAQ · espelho',
  faqSourceLabel: 'Centro de ajuda ao vivo em mulebuy.com ↗',
  faqMirrorNoteHtml: `Esta FAQ espelha o <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">centro de ajuda da Mulebuy</a>. Em caso de divergência, prevalece a página ao vivo.`,
};

const es: HowToBuyCopy = {
  title: 'Guía de compra Mulebuy · pasos espejo | mulebuyai.com',
  description:
    'Flujo espejado de la guía oficial de Mulebuy: búsqueda, pago, almacén, envío internacional — verifica reglas en mulebuy.com.',
  keywords:
    'guía Mulebuy, comprar Taobao Weidian, QC almacén',
  backHomeLabel: '← Volver al inicio',
  h1: 'Cómo comprar',
  introHtml: `Localiza SKUs con el <a href="{ml}" target="_blank" rel="noopener noreferrer">browse indexado</a>; checkout y QC solo en <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. La UI cambia — confía en tu sesión.`,
  guideRibbonBadge: 'Guía · espejo',
  guideSourceLabel: 'Guía en vivo en mulebuy.com ↗',
  guideMirrorNoteHtml: `Los pasos siguientes reflejan la <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">guía oficial de Mulebuy</a>. Si algo difiere, prevalece la página en vivo.`,
  faqH2: 'Preguntas frecuentes',
  faqRibbonBadge: 'FAQ · espejo',
  faqSourceLabel: 'Centro de ayuda en vivo en mulebuy.com ↗',
  faqMirrorNoteHtml: `Esta FAQ refleja el <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">centro de ayuda de Mulebuy</a>. Si algo difiere, prevalece la página en vivo.`,
};

const fr: HowToBuyCopy = {
  title: 'Guide d’achat Mulebuy · étapes miroir | mulebuyai.com',
  description:
    'Flux miroir du guide officiel Mulebuy : recherche, paiement, entrepôt, expédition — vérifiez les règles sur mulebuy.com.',
  keywords:
    'guide Mulebuy, acheter Taobao Weidian, QC entrepôt',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Comment acheter',
  introHtml: `Repérez les SKU via le <a href="{ml}" target="_blank" rel="noopener noreferrer">browse indexé</a>, puis checkout et QC uniquement sur <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. Les libellés bougent — suivez la session connectée.`,
  guideRibbonBadge: 'Guide · miroir',
  guideSourceLabel: 'Guide officiel sur mulebuy.com ↗',
  guideMirrorNoteHtml: `Les étapes ci-dessous reproduisent le <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">guide d’achat officiel Mulebuy</a>. En cas d’écart, la page live fait foi.`,
  faqH2: 'Foire aux questions',
  faqRibbonBadge: 'FAQ · miroir',
  faqSourceLabel: 'Centre d’aide en direct sur mulebuy.com ↗',
  faqMirrorNoteHtml: `Cette FAQ reflète le <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">centre d’aide Mulebuy</a>. En cas d’écart, la page en direct fait foi.`,
};

const it: HowToBuyCopy = {
  title: 'Guida agli acquisti Mulebuy · passaggi mirror | mulebuyai.com',
  description:
    'Flusso mirror dalla guida ufficiale Mulebuy: ricerca, pagamento, magazzino, spedizione internazionale — verifica su mulebuy.com.',
  keywords:
    'guida Mulebuy, ordinare Taobao Weidian, QC magazzino',
  backHomeLabel: '← Torna alla home',
  h1: 'Come acquistare',
  introHtml: `Trova SKU tramite il <a href="{ml}" target="_blank" rel="noopener noreferrer">browse indicizzato</a>; checkout e QC solo su <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. Le etichette cambiano — segui la sessione autenticata.`,
  guideRibbonBadge: 'Guida · mirror',
  guideSourceLabel: 'Guida live su mulebuy.com ↗',
  guideMirrorNoteHtml: `I passi qui sotto rispecchiano la <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">guida ufficiale Mulebuy</a>. In caso di differenze, vale la pagina live.`,
  faqH2: 'Domande frequenti',
  faqRibbonBadge: 'FAQ · mirror',
  faqSourceLabel: 'Centro assistenza live su mulebuy.com ↗',
  faqMirrorNoteHtml: `Questa FAQ rispecchia il <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">centro assistenza Mulebuy</a>. In caso di differenze, vale la pagina live.`,
};

const pl: HowToBuyCopy = {
  title: 'Przewodnik zakupów Mulebuy · lustro kroków | mulebuyai.com',
  description:
    'Odtworzony z oficjalnego przewodnika Mulebuy: wyszukiwanie, płatność, magazyn, wysyłka międzynarodowa — reguły sprawdzaj na mulebuy.com.',
  keywords:
    'poradnik Mulebuy, zakupy Taobao Weidian, QC magazyn',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Jak kupować',
  introHtml: `Szukaj SKU przez <a href="{ml}" target="_blank" rel="noopener noreferrer">zindeksowany przegląd</a>; checkout i QC tylko w <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">Mulebuy</a>. Etykiety się zmieniają — trzymaj się widoku po zalogowaniu.`,
  guideRibbonBadge: 'Poradnik · lustro',
  guideSourceLabel: 'Oficjalny przewodnik na mulebuy.com ↗',
  guideMirrorNoteHtml: `Poniższe kroki odzwierciedlają <a href="${OFFICIAL_BUYING_GUIDE}" target="_blank" rel="noopener noreferrer">oficjalny przewodnik zakupowy Mulebuy</a>. Przy rozbieżnościach obowiązuje strona na żywo.`,
  faqH2: 'Często zadawane pytania',
  faqRibbonBadge: 'FAQ · lustro',
  faqSourceLabel: 'Centrum pomocy na żywo na mulebuy.com ↗',
  faqMirrorNoteHtml: `Ta FAQ odzwierciedla <a href="${OFFICIAL_HELP_CENTER}" target="_blank" rel="noopener noreferrer">centrum pomocy Mulebuy</a>. Przy rozbieżnościach obowiązuje strona na żywo.`,
};

export const HOW_TO_BUY_COPY: Record<RouteLocale, HowToBuyCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getHowToBuyCopy(locale: string): HowToBuyCopy {
  const lc = locale as RouteLocale;
  return HOW_TO_BUY_COPY[lc] ?? en;
}

export function hydrateHowToBuyCopy(raw: HowToBuyCopy, mlHref: string): HowToBuyCopy {
  return {
    ...raw,
    introHtml: raw.introHtml.replace(/\{ml\}/g, mlHref),
    guideMirrorNoteHtml: raw.guideMirrorNoteHtml.replace(/\{ml\}/g, mlHref),
    faqMirrorNoteHtml: raw.faqMirrorNoteHtml.replace(/\{ml\}/g, mlHref),
  };
}
