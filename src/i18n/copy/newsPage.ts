import type { RouteLocale } from '../config';

/** Tokens replaced in `hydrateNewsCopy`: `{guideUrl}` `{buyerUrl}` `{howToUrl}` `{mulebuyHomeUrl}` `{homeCuratedUrl}` `{mlCatalogUrl}` `{carouselTap0}` … `{carouselTap6}` `{mulebuyIssueUrl}` `{count}` (`carouselTap*` from `homeCategoryBannerTapUrls(locale)`). */
export type NewsActivityItem = {
  title: string;
  pillVariant: 'internal' | 'external';
  pillText: string;
  bodyHtml: string;
  moreHtml: string;
};

export type NewsOfficialBlock = {
  badge: string;
  faqHubLabel: string;
  metaHtml: string;
  sourcePageLabel: string;
};

export type NewsCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  topIntroHtml: string;
  featuredBannerHeading: string;
  featuredBannerIntroHtml: string;
  activityHeading: string;
  activityIntroHtml: string;
  activityItems: NewsActivityItem[];
  official: NewsOfficialBlock;
  stepsHeading: string;
  stepListItemsHtml: string[];
  tipsHeading: string;
  tipListItemsHtml: string[];
  disclaimerHtml: string;
  howToSchema: {
    name: string;
    description: string;
    step: { name: string; text: string }[];
  };
};

const K_HELP_HUB = 'https://mulebuy.com/';

export function hydrateNewsCopy(
  raw: NewsCopy,
  urls: {
    guideUrl: string;
    buyerUrl: string;
    howToUrl: string;
    mulebuyHomeUrl: string;
    homeCuratedUrl: string;
    mlCatalogUrl: string;
    excerptCount: number;
    /** Same seven URLs as `homeCategoryBannerTapUrls(locale)` — card CTAs mirror carousel taps. */
    carouselTapUrls: readonly [string, string, string, string, string, string, string];
  },
): NewsCopy {
  const taps = urls.carouselTapUrls;
  const map: Record<string, string> = {
    '{guideUrl}': urls.guideUrl,
    '{buyerUrl}': urls.buyerUrl,
    '{howToUrl}': urls.howToUrl,
    '{mulebuyHomeUrl}': urls.mulebuyHomeUrl,
    '{homeCuratedUrl}': urls.homeCuratedUrl,
    '{mlCatalogUrl}': urls.mlCatalogUrl,
    '{carouselTap0}': taps[0],
    '{carouselTap1}': taps[1],
    '{carouselTap2}': taps[2],
    '{carouselTap3}': taps[3],
    '{carouselTap4}': taps[4],
    '{carouselTap5}': taps[5],
    '{carouselTap6}': taps[6],
    '{mulebuyIssueUrl}': K_HELP_HUB,
    '{count}': String(urls.excerptCount),
  };

  function sub(html: string) {
    let o = html;
    for (const [k, v] of Object.entries(map)) {
      o = o.split(k).join(v);
    }
    return o;
  }

  const activityItems = raw.activityItems.map((it) => ({
    ...it,
    bodyHtml: sub(it.bodyHtml),
    moreHtml: sub(it.moreHtml),
  }));

  let officialMeta = raw.official.metaHtml.replaceAll('{count}', String(urls.excerptCount));
  officialMeta = officialMeta.split('{mulebuyIssueUrl}').join(K_HELP_HUB);

  return {
    ...raw,
    topIntroHtml: sub(raw.topIntroHtml),
    featuredBannerIntroHtml: sub(raw.featuredBannerIntroHtml),
    activityIntroHtml: sub(raw.activityIntroHtml),
    activityItems,
    official: { ...raw.official, metaHtml: officialMeta },
    stepListItemsHtml: raw.stepListItemsHtml.map(sub),
    tipListItemsHtml: raw.tipListItemsHtml.map(sub),
    disclaimerHtml: sub(raw.disclaimerHtml),
  };
}

const en: NewsCopy = {
  title: 'Research desk · Mulebuy spreadsheet context, ribbons & paste hygiene | mulebuyai.com',
  description:
    'Rewritten briefing layer for spreadsheet-led shoppers: decode homepage ribbons, interpret banner tiles without hype, skim mirrored Mulebuy notices offline, and rehearse QC/freight expectations before you fund anything on mulebuy.com.',
  keywords:
    'Mulebuy spreadsheet research desk, spreadsheet catalogue briefing, mirrored agent notices, warehouse QC primer, freight realism, paste URL hygiene Mulebuy',
  backHomeLabel: '← Back to home',
  h1: 'News & guides',
  topIntroHtml: `Prefer step-by-step motion? Open the <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Mulebuy spreadsheet paste playbook</a>. Want messy timelines from buyers? <a href="{buyerUrl}">Buyer shares</a> rounds up community write-ups. Taxes, fees, and courier menus rotate often—your authenticated <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> dashboard remains authoritative. mulebuyai.com never stores wallets or prints labels.`,
  featuredBannerHeading: 'Reading the homepage ribbon',
  featuredBannerIntroHtml: `The rotating banner strip beneath <a href="{homeCuratedUrl}">Explore categories</a> reuses the <strong>same seven creatives</strong> as the homepage hero promo row—Raise A Kitty, Discord-forward carousel slides and GIF rail, the Maison Looks home shortcut, the How-to-buy literacy tile, plus the tall right-rail <strong>Global Creators Program</strong> artwork.`,
  activityHeading: 'What each ribbon tile is trying to say',
  activityIntroHtml: `Cards follow that <strong>homepage ribbon order</strong>. Promo maths always defer to <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">live Mulebuy messaging</a> plus Discord moderator announcements—we mirror wording here for offline briefing only.`,
  activityItems: [
    {
      title: 'Raise A Kitty · mirrored Mulebuy event',
      pillVariant: 'internal',
      pillText: 'Full rules on mulebuyai.com',
      bodyHtml: `<p><strong>Left carousel slide 1.</strong> Full mirrored rules for Mulebuy’s <strong>Raise A Kitty</strong> mini-game (shipping coupons &amp; points). Participation stays <strong>app-only on Mulebuy</strong>—always validate deadlines inside their live event UI.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Full activity detail →</a></p>`,
    },
    {
      title: 'Discord · giveaways & drops strip',
      pillVariant: 'external',
      pillText: 'Maison Looks Discord invite',
      bodyHtml: `<p><strong>Left carousel slide 2.</strong> Loud giveaway artwork routes to the shared <strong>Maison Looks Discord hub</strong>. Confirm raffle wording with mods—nothing here mints balances.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Open Discord invite ↗</a></p>`,
    },
    {
      title: 'Discord · creator chatter strip',
      pillVariant: 'external',
      pillText: 'Same Discord invite',
      bodyHtml: `<p><strong>Left carousel slide 3.</strong> Creator-program visuals open the <strong>same Discord invite</strong> so chatter stays centralized; authoritative payout rules remain on <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Open Discord invite ↗</a></p>`,
    },
    {
      title: 'Middle ribbon GIF · Discord splash',
      pillVariant: 'external',
      pillText: 'Maison Looks Discord invite',
      bodyHtml: `<p><strong>Middle column, top tile.</strong> Animated splash mirrors Mulebuy’s promo pacing but taps the <strong>Maison Looks Discord</strong> so timelines publish where mods can pin them.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Open Discord invite ↗</a></p>`,
    },
    {
      title: 'Maison Looks · storefront lane',
      pillVariant: 'external',
      pillText: 'Opens maisonlooks.com',
      bodyHtml: `<p><strong>Middle column, lower-left tile.</strong> Opens the Maison Looks <strong>English home hub</strong>—use catalogue entrypoints there before pasting listings back through <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Open Maison Looks home ↗</a></p>`,
    },
    {
      title: 'How to buy · on-site literacy',
      pillVariant: 'internal',
      pillText: 'Guide on mulebuyai.com',
      bodyHtml: `<p><strong>Middle column, lower-right tile.</strong> Rainbow HOW-style artwork pairs with our spreadsheet-aware checklist—wallet debits stay inside authenticated <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Open How to buy guide →</a></p>`,
    },
    {
      title: 'Global Creators Program · mirrored Mulebuy event',
      pillVariant: 'internal',
      pillText: 'Full brief on mulebuyai.com',
      bodyHtml: `<p><strong>Right-hand tall rail.</strong> Mirrored briefing for Mulebuy’s <strong>Global Creators Program</strong> (video bounty tiers). Enrollment and payouts stay inside authenticated <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> flows—not Discord captions alone.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Full creators programme detail →</a></p>`,
    },
  ],
  official: {
    badge: 'Mirrored notice excerpts · Mulebuy',
    faqHubLabel: 'Live Mulebuy help ↗',
    metaHtml: `Accordions archive short Mulebuy notices for offline reading. Expand any row to view frozen wording. When anything disagrees with shipping reality, trust <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">Mulebuy’s live help hub</a>. <strong>{count}</strong> excerpts are linked below.`,
    sourcePageLabel: 'Source reference ↗',
  },
  stepsHeading: 'Operational checklist',
  stepListItemsHtml: [
    `<strong>Select a lane deliberately.</strong> From the <a href="{homeCuratedUrl}">category mosaic</a>, launch only the lane matching your hunt so Spreadsheet filters stay tight.`,
    `<strong>Stop on a real SKU.</strong> Listing detail views preserve variant matrices; generic storefront pages rarely survive disputes.`,
    `<strong>Copy the durable URL.</strong> Prefer the share/previews that still resolve to the exact SKU after reload—not iframe wrappers or screenshot dumps.`,
    `<strong>Paste inside Mulebuy.</strong> On <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>, run whatever intake UI you see this month, then mirror every selector the listing demanded.`,
    `<strong>Fund domestically through Mulebuy.</strong> Routing surcharges, measurements, and photography requests belong to their ledger.`,
    `<strong>QC before export approval.</strong> Treat inbound photography as contractual evidence—challenge faults prior to accepting international labels.`,
    `<strong>Pick outbound mode soberly.</strong> DIM surprises dominate bulky sneakers and insulated jackets; spreadsheet hints are not invoices.`,
  ],
  tipsHeading: 'Sanity rails',
  tipListItemsHtml: [
    `Pair this desk with <a href="{howToUrl}">How to buy</a> when you want literal UI choreography.`,
    `Private worksheet tabs stay yours—this hub never syncs Google Sheets or CSV columns.`,
    `Freight APIs and ledgers stay inside Mulebuy; we publish prose only.`,
  ],
  disclaimerHtml: `<strong>Disclaimer:</strong> Editorial synthesis. Liability for prohibited goods, refunds, duties, and carriers rests with Mulebuy, sellers, freight firms, and regulators—verify listings personally.`,
  howToSchema: {
    name: 'Seven beats from Spreadsheet browse to Mulebuy shipment',
    description:
      'Lane pick → SKU proof → URL lift → Mulebuy intake → domestic settlement → warehouse QC read → mindful courier booking.',
    step: [
      {
        name: 'Open the lane chip',
        text: 'Tap the homepage lane that matches your search intent so Spreadsheet filters inherit the right taxonomy.',
      },
      {
        name: 'Load the listing you will actually fund',
        text: 'Stay inside product detail chrome until measurements, colours, and galleries look coherent.',
      },
      {
        name: 'Harvest a reload-safe URL',
        text: 'Copy the address that keeps the variant after refresh—skip redirects that bounce between storefronts.',
      },
      {
        name: 'Drop into Mulebuy intake',
        text: 'Authenticate, paste, and confirm options exactly as the marketplace listing demanded.',
      },
      {
        name: 'Pay domestic charges',
        text: 'Let Mulebuy’s partners finish the inland segment before expecting QC uploads.',
      },
      {
        name: 'Read QC like an inspector',
        text: 'Magnify panels, logos, hardware, and textiles—open tickets before approving exports.',
      },
      {
        name: 'Choose international service wisely',
        text: 'Compare liability, insurance, and volumetrics; landed receipts should dwarf naive spreadsheet cells.',
      },
    ],
  },
};

const de: NewsCopy = {
  title: 'Research Desk · Mulebuy Spreadsheet Kontext, Banner-Leisten & Paste-Hygiene | mulebuyai.com',
  description:
    'Neu formulierte Briefingschicht für spreadsheet-geführte Käufer: Homepage-Leisten entschlüsseln, Banner-Kacheln ohne Hype lesen, gespiegelte Mulebuy-Hinweise offline überfliegen und QC-/Fracht-Erwartungen üben, bevor Sie auf mulebuy.com etwas finanzieren.',
  keywords:
    'Mulebuy Spreadsheet Research Desk, Spreadsheet-Katalog-Briefing, gespiegelte Agent-Hinweise, Warehouse-QC-Primär, Fracht-Realismus, Paste-URL-Hygiene Mulebuy',
  backHomeLabel: '← Zur Startseite',
  h1: 'News & Anleitungen',
  topIntroHtml: `Schritt-für-Schritt bevorzugt? Öffnen Sie das <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Mulebuy Spreadsheet Paste-Playbook</a>. Chaotische Zeitachsen von Käufern? Unter <a href="{buyerUrl}">Käufer-Stimmen</a> sammeln wir Community-Texte. Steuern, Gebühren und Kurier-Menüs ändern sich oft — Ihr authentifiziertes <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>-Dashboard bleibt maßgeblich. mulebuyai.com speichert keine Wallets und druckt keine Labels.`,
  featuredBannerHeading: 'Die Homepage-Leiste lesen',
  featuredBannerIntroHtml: `Der rotierende Banner unter <a href="{homeCuratedUrl}">Kategorien erkunden</a> nutzt dieselben <strong>sieben Motive</strong> wie die Promo-Reihe auf der Startseite — Raise A Kitty, Discord-Karussell &amp; GIF-Leiste, Maison-Looks-Home, HOW-TO-Kachel sowie das hohe <strong>Global Creators Program</strong>-Rail rechts.`,
  activityHeading: 'Was jede Leisten-Kachel aussagen will',
  activityIntroHtml: `Die Karten folgen <strong>derselben Reihenfolge wie diese Startseiten-Leiste</strong>. Prämien-Mathe gilt immer der <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">aktuellen Mulebuy-Kommunikation</a> plus Discord-Mods — hier nur Briefing-Spiegel.`,
  activityItems: [
    {
      title: 'Raise A Kitty · Mulebuy-Event (Spiegel)',
      pillVariant: 'internal',
      pillText: 'Volltext auf mulebuyai.com',
      bodyHtml: `<p><strong>Linkes Karussell · Slide 1.</strong> Vollständiger Textspiegel für Mulebuys <strong>Raise A Kitty</strong> (Versand-Coupons &amp; Punkte). Teilnahme nur in der <strong>Mulebuy-App</strong> — Fristen live dort prüfen.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Kompletter Eventtext →</a></p>`,
    },
    {
      title: 'Discord · Giveaways & Drops',
      pillVariant: 'external',
      pillText: 'Maison-Looks-Discord',
      bodyHtml: `<p><strong>Karussell Slide 2.</strong> Laute Gewinnspiel-Grafik springt in den gemeinsamen <strong>Maison-Looks-Discord</strong>. Regeln mit Mods verifizieren — hier werden keine Guthaben gebucht.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Discord-Einladung öffnen ↗</a></p>`,
    },
    {
      title: 'Discord · Creator-Chatter',
      pillVariant: 'external',
      pillText: 'Gleiche Discord-Einladung',
      bodyHtml: `<p><strong>Karussell Slide 3.</strong> Creator-Motive öffnen dieselbe <strong>Discord-Einladung</strong>; verbindliche Auszahlungsregeln bleiben auf <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Discord-Einladung öffnen ↗</a></p>`,
    },
    {
      title: 'Mittlere GIF-Leiste · Discord-Splash',
      pillVariant: 'external',
      pillText: 'Maison-Looks-Discord',
      bodyHtml: `<p><strong>Mittelspalte oben.</strong> Animiertes Motiv mit gleicher Discord-Ziel-URL, damit Zeitpläne dort gepinnt werden können.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Discord-Einladung öffnen ↗</a></p>`,
    },
    {
      title: 'Maison Looks · Storefront-Spur',
      pillVariant: 'external',
      pillText: 'Öffnet maisonlooks.com',
      bodyHtml: `<p><strong>Mittelspalte unten links.</strong> Öffnet das englische <strong>Maison-Looks-Portal</strong> — Links dann wieder in <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> einfügen.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Maison-Looks-Start ↗</a></p>`,
    },
    {
      title: 'How to buy · Onboarding-Kachel',
      pillVariant: 'internal',
      pillText: 'Leitfaden auf mulebuyai.com',
      bodyHtml: `<p><strong>Mittelspalte unten rechts.</strong> HOW-Stil-Kachel verlinkt unsere spreadsheet-taugliche Checkliste — Abbuchungen nur im eingeloggten <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Leitfaden So kaufen →</a></p>`,
    },
    {
      title: 'Global Creators Program · Mulebuy-Event (Spiegel)',
      pillVariant: 'internal',
      pillText: 'Voller Brief auf mulebuyai.com',
      bodyHtml: `<p><strong>Hohes Hochformat rechts außen.</strong> Textspiegel für das <strong>Global Creators Program</strong> von Mulebuy (Video-Prämienstufen). Anmeldung und Auszahlungen bleiben in authentifizierten <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>-Flows — nicht allein in Discord-Beschriftungen.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Kompletter Creators-Programmtext →</a></p>`,
    },
  ],
  official: {
    badge: 'Gespiegelte Hinweisauszüge · Mulebuy',
    faqHubLabel: 'Live Mulebuy-Hilfe ↗',
    metaHtml: `Die Accordions archivieren kurze Mulebuy-Hinweise zum Offline-Lesen. Zeile aufklappen für eingefrorenen Wortlaut. Bei Abweichungen zur Versandrealität gilt <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">Mulebuys Live-Help-Hub</a>. Unten sind <strong>{count}</strong> Auszüge verlinkt.`,
    sourcePageLabel: 'Quellenreferenz ↗',
  },
  stepsHeading: 'Operative Checkliste',
  stepListItemsHtml: [
    `<strong>Lane bewusst wählen.</strong> Vom <a href="{homeCuratedUrl}">Kategorie-Mosaik</a> nur die Spur starten, die zu Ihrer Suche passt — damit bleiben Spreadsheet-Filter eng.`,
    `<strong>Bei einer echten SKU anhalten.</strong> Listing-Detailansichten behalten Variantenmatrizen; generische Shop-Startseiten überstehen selten Streitfälle.`,
    `<strong>Die belastbare URL kopieren.</strong> Teilen-/Vorschau-Links bevorzugen, die nach Reload noch dieselbe SKU zeigen — keine iframe-Wrapper oder Screenshot-Dumps.`,
    `<strong>In Mulebuy einfügen.</strong> Auf <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a> die Intake-Oberfläche dieses Monats nutzen und jeden vom Listing geforderten Selector spiegeln.`,
    `<strong>Inland nur über Mulebuy finanzieren.</strong> Routing-Zuschläge, Maße und Fotoaufträge gehören zu deren Ledger.`,
    `<strong>Vor Exportfreigabe QC.</strong> Inbound-Fotografie als vertragliche Evidenz lesen — Mängel anfechten, bevor Sie internationale Labels akzeptieren.`,
    `<strong>Ausgehenden Modus nüchtern wählen.</strong> Bei sperrigen Sneakern und isolierter Outerwear überraschen DIM-Gewichte am häufigsten — Spreadsheet-Hinweise sind keine Rechnungen.`,
  ],
  tipsHeading: 'Sanity Rails',
  tipListItemsHtml: [
    `Diesen Desk mit <a href="{howToUrl}">So kaufen</a> kombinieren, wenn Sie wörtliche UI-Schritte brauchen.`,
    `Private Arbeitsblatt-Tabs bleiben Ihre — dieser Hub synchronisiert keine Google Sheets oder CSV-Spalten.`,
    `Fracht-APIs und Ledger bleiben in Mulebuy; wir veröffentlichen nur Prosa.`,
  ],
  disclaimerHtml: `<strong>Hinweis:</strong> Redaktionelle Synthese. Haftung für verbotene Ware, Erstattungen, Zölle und Carrier liegt bei Mulebuy, Verkäufern, Frachtfirmen und Aufsicht — Listings persönlich verifizieren.`,
  howToSchema: {
    name: 'Sieben Takte vom Spreadsheet-Browse bis zur Mulebuy-Sendung',
    description:
      'Lane wählen → SKU belegen → URL heben → Mulebuy-Intake → Inland begleichen → Warehouse-QC lesen → Kurierbuchung mit Augenmaß.',
    step: [
      {
        name: 'Lane-Chip öffnen',
        text: 'Die Homepage-Lane antippen, die zur Suchabsicht passt, damit Spreadsheet-Filter die richtige Taxonomie erben.',
      },
      {
        name: 'Das Listing laden, das Sie finanzieren',
        text: 'Im Produkt-Detail-Chrome bleiben, bis Maße, Farben und Galerien schlüssig wirken.',
      },
      {
        name: 'Reload-sichere URL ernten',
        text: 'Die Adresse kopieren, die nach Aktualisierung die Variante behält — keine Redirects zwischen Schaufenstern.',
      },
      {
        name: 'In Mulebuy-Intake fallen',
        text: 'Authentifizieren, einfügen und Optionen genau so bestätigen, wie das Listing es verlangte.',
      },
      {
        name: 'Inlandskosten zahlen',
        text: 'Mulebuy-Partner den nationalen Abschnitt fertigstellen lassen, bevor Sie QC-Uploads erwarten.',
      },
      {
        name: 'QC wie ein Prüfer lesen',
        text: 'Paneele, Logos, Hardware und Textilien vergrößern — Tickets vor Exportfreigabe öffnen.',
      },
      {
        name: 'Internationalen Service nüchtern wählen',
        text: 'Haftung, Versicherung und Volumetrik vergleichen; Landed-Belege sollten naive Spreadsheet-Zellen übertreffen.',
      },
    ],
  },
};

const pt: NewsCopy = {
  title: 'Research desk · contexto Mulebuy Spreadsheet, faixas do site e higiene de colagem | mulebuyai.com',
  description:
    'Camada editorial reescrita para quem compra guiado por spreadsheet: ler faixas da página inicial, interpretar mosaicos sem hype, folhear avisos espelhados da Mulebuy offline e ensaiar expetativas de QC/frete antes de financiar qualquer coisa em mulebuy.com.',
  keywords:
    'research desk Mulebuy spreadsheet, briefing catálogo spreadsheet, avisos espelhados agente, prima QC armazém, realismo frete, higiene URL colagem Mulebuy',
  backHomeLabel: '← Voltar ao início',
  h1: 'Notícias & guias',
  topIntroHtml: `Prefere passos na ordem? Abra o <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">playbook de colagem Mulebuy Spreadsheet</a>. Cronologias confusas de compradores? Em <a href="{buyerUrl}">Voz dos compradores</a> reunimos textos da comunidade. Impostos, taxas e menus de courier mudam com frequência — o painel autenticado da <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> prevalece. mulebuyai.com não guarda carteiras nem imprime etiquetas.`,
  featuredBannerHeading: 'Ler a faixa da página inicial',
  featuredBannerIntroHtml: `A faixa rotativa sob <a href="{homeCuratedUrl}">Explorar categorias</a> reutiliza os <strong>mesmos sete criativos</strong> da fila promocional do hero — Raise A Kitty, slides Discord + GIF central, atalho Maison Looks, cartão HOW TO BUY e o rail alto direito do <strong>Global Creators Program</strong>.`,
  activityHeading: 'O que cada bloco da faixa comunica',
  activityIntroHtml: `Os cartões repetem a <strong>ordem dessa faixa na página inicial</strong>. Prémios e regras finais vêm sempre da <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">comunicação Mulebuy ao vivo</a> e dos mods do Discord — aqui é apenas texto espelhado.`,
  activityItems: [
    {
      title: 'Raise A Kitty · evento Mulebuy (espelho)',
      pillVariant: 'internal',
      pillText: 'Texto completo em mulebuyai.com',
      bodyHtml: `<p><strong>Carrossel esquerdo · slide 1.</strong> Espelho integral da campanha <strong>Raise A Kitty</strong> (cupões de envio e pontos). Participação <strong>só na app Mulebuy</strong> — confirme prazos na UI oficial.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Detalhe completo da atividade →</a></p>`,
    },
    {
      title: 'Discord · faixa de giveaways',
      pillVariant: 'external',
      pillText: 'Convite Discord Maison Looks',
      bodyHtml: `<p><strong>Slide 2.</strong> Arte chamativa envia para o <strong>Discord partilhado Maison Looks</strong>. Valide sorteios com os mods — aqui não há créditos automáticos.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Abrir convite Discord ↗</a></p>`,
    },
    {
      title: 'Discord · faixa de creators',
      pillVariant: 'external',
      pillText: 'Mesmo convite Discord',
      bodyHtml: `<p><strong>Slide 3.</strong> Motivos de criadores abrem o <strong>mesmo convite Discord</strong>; regras de pagamento oficiais ficam em <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Abrir convite Discord ↗</a></p>`,
    },
    {
      title: 'GIF central · splash Discord',
      pillVariant: 'external',
      pillText: 'Convite Discord Maison Looks',
      bodyHtml: `<p><strong>Coluna do meio · topo.</strong> GIF animado com o mesmo destino Discord para crónologias fixadas pelos mods.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Abrir convite Discord ↗</a></p>`,
    },
    {
      title: 'Maison Looks · entrada da loja',
      pillVariant: 'external',
      pillText: 'Abre maisonlooks.com',
      bodyHtml: `<p><strong>Coluna do meio · canto inferior esquerdo.</strong> Abre o hub <strong>inglês Maison Looks</strong> — copie links de volta para <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Abrir página inicial Maison Looks ↗</a></p>`,
    },
    {
      title: 'How to buy · cartão no site',
      pillVariant: 'internal',
      pillText: 'Guia em mulebuyai.com',
      bodyHtml: `<p><strong>Coluna do meio · canto inferior direito.</strong> Estilo HOW TO BUY aponta para a nossa checklist com spreadsheet — débitos só na sessão <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guia Como comprar →</a></p>`,
    },
    {
      title: 'Global Creators Program · evento Mulebuy (espelho)',
      pillVariant: 'internal',
      pillText: 'Briefing completo em mulebuyai.com',
      bodyHtml: `<p><strong>Rail alto à direita.</strong> Espelho editorial do <strong>Global Creators Program</strong> (níveis de recompensa por vídeo). Inscrição e pagamentos ficam nos fluxos <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> autenticados — não apenas legendas no Discord.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Detalhe completo do programa →</a></p>`,
    },
  ],
  official: {
    badge: 'Excertos espelhados · Mulebuy',
    faqHubLabel: 'Ajuda Mulebuy ao vivo ↗',
    metaHtml: `Os acordeões arquivam breves avisos Mulebuy para leitura offline. Expanda qualquer linha para ver a redação congelada. Se algo discordar da realidade de envio, confie no <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">centro de ajuda Mulebuy ao vivo</a>. Abaixo estão ligados <strong>{count}</strong> excertos.`,
    sourcePageLabel: 'Referência de fonte ↗',
  },
  stepsHeading: 'Checklist operacional',
  stepListItemsHtml: [
    `<strong>Escolha uma faixa com intenção.</strong> No <a href="{homeCuratedUrl}">mosaico de categorias</a>, abra só o corredor da sua caça para manter filtros Spreadsheet apertados.`,
    `<strong>Pare num SKU real.</strong> As vistas detalhadas de anúncio preservam matrizes de variantes; páginas genéricas de loja raramente sobrevêm a disputas.`,
    `<strong>Copie o URL durável.</strong> Prefira partilhas/pré-visualizações que continuem a resolver para o mesmo SKU após recarregar — não molduras iframe nem capturas.`,
    `<strong>Cole dentro da Mulebuy.</strong> Em <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>, use a UI de intake deste mês e espelhe cada seletor que o anúncio exigiu.`,
    `<strong>Financie o nacional pela Mulebuy.</strong> Encargos de roteamento, medidas e pedidos de fotografia pertencem ao ledger deles.`,
    `<strong>QC antes de aprovar exportação.</strong> Trate fotografia inbound como evidência contratual — conteste falhas antes de aceitar etiquetas internacionais.`,
    `<strong>Reserve outbound com sobriedade.</strong> Surpresas de DIM dominam com sapatilhas volumosas e casacos isolantes; dicas de spreadsheet não são faturas.`,
  ],
  tipsHeading: 'Barreiras de sanidade',
  tipListItemsHtml: [
    `Junte este desk a <a href="{howToUrl}">Como comprar</a> quando quiser coreografia literal da UI.`,
    `Separadores privados de folha de cálculo continuam seus — este hub não sincroniza Google Sheets nem colunas CSV.`,
    `APIs de frete e ledger ficam na Mulebuy; nós publicamos apenas prosa.`,
  ],
  disclaimerHtml: `<strong>Aviso:</strong> síntese editorial. Responsabilidade por bens proibidos, reembolsos, taxas alfandegárias e transportadoras cabe à Mulebuy, vendedores, empresas de frete e reguladores — verifique listagens pessoalmente.`,
  howToSchema: {
    name: 'Sete batidas do browse Spreadsheet à expedição Mulebuy',
    description:
      'Escolha faixa → prova SKU → eleva URL → intake Mulebuy → liquidação nacional → leitura QC armazém → reserva consciente de courier.',
    step: [
      {
        name: 'Abrir o chip de faixa',
        text: 'Toque na faixa da página inicial que casa com a sua intenção para os filtros Spreadsheet herdarem a taxonomia certa.',
      },
      {
        name: 'Carregar o anúncio que vai financiar',
        text: 'Fique no chrome de detalhe até medidas, cores e galerias parecerem coerentes.',
      },
      {
        name: 'Colher URL segura após reload',
        text: 'Copie o endereço que mantém a variante após atualizar — evite redirecionamentos entre vitrines.',
      },
      {
        name: 'Entrar no intake Mulebuy',
        text: 'Autentique, cole e confirme opções exatamente como o marketplace exigiu.',
      },
      {
        name: 'Pagar encargos nacionais',
        text: 'Deixe parceiros Mulebuy fechar o segmento nacional antes de esperar uploads QC.',
      },
      {
        name: 'Ler QC como inspector',
        text: 'Amplie painéis, logos, hardware e têxteis — abra tickets antes de aprovar exportações.',
      },
      {
        name: 'Escolher serviço internacional com critério',
        text: 'Compare responsabilidade, seguro e volumetria; recibos landed devem superar células ingénuas de spreadsheet.',
      },
    ],
  },
};

const es: NewsCopy = {
  title: 'Research desk · contexto Mulebuy Spreadsheet, franjas del sitio e higiene de pegado | mulebuyai.com',
  description:
    'Capa editorial reescrita para compradores guiados por spreadsheet: decodificar franjas de la página inicial, interpretar mosaicos sin hype, repasar avisos espejo de Mulebuy sin conexión y ensayar expectativas de QC/flete antes de financiar nada en mulebuy.com.',
  keywords:
    'research desk Mulebuy spreadsheet, briefing catálogo spreadsheet, avisos espejo agente, QC almacén primaria, realismo flete, higiene URL pegado Mulebuy',
  backHomeLabel: '← Volver al inicio',
  h1: 'Noticias y guías',
  topIntroHtml: `¿Prefieres paso a paso? Abre la <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guía de pegado Mulebuy Spreadsheet</a>. ¿Cronologías caóticas de compradores? En <a href="{buyerUrl}">Historias de compradores</a> reunimos textos de la comunidad. Impuestos, tasas y menús de courier cambian a menudo — el panel autenticado de <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> es autoritativo. mulebuyai.com no custodia carteras ni imprime etiquetas.`,
  featuredBannerHeading: 'Leer la franja de la página de inicio',
  featuredBannerIntroHtml: `La franja rotativa bajo <a href="{homeCuratedUrl}">Explorar categorías</a> reutiliza los <strong>mismos siete creativos</strong> que la fila promocional del hero — Raise A Kitty, carrusel Discord + GIF central, acceso Maison Looks, tarjeta HOW TO BUY y el riel alto derecho del <strong>Global Creators Program</strong>.`,
  activityHeading: 'Qué intenta decir cada bloque de la franja',
  activityIntroHtml: `Las tarjetas copian el <strong>orden de esa franja en la página de inicio</strong>. Premios y reglas definitivas vienen de la <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mensajería Mulebuy en vivo</a> y de los mods de Discord — aquí solo hay texto espejo.`,
  activityItems: [
    {
      title: 'Raise A Kitty · evento Mulebuy (espejo)',
      pillVariant: 'internal',
      pillText: 'Texto completo en mulebuyai.com',
      bodyHtml: `<p><strong>Carrusel izquierdo · slide 1.</strong> Espejo íntegro de <strong>Raise A Kitty</strong> (cupones de envío y puntos). Participación <strong>solo en la app Mulebuy</strong>: verifica plazos en su UI.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Detalle completo de la actividad →</a></p>`,
    },
    {
      title: 'Discord · franja de giveaways',
      pillVariant: 'external',
      pillText: 'Invitación Discord Maison Looks',
      bodyHtml: `<p><strong>Slide 2.</strong> Arte ruidoso lleva al <strong>Discord compartido Maison Looks</strong>. Confirma sorteos con moderadores — aquí no hay saldo automático.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Abrir invitación Discord ↗</a></p>`,
    },
    {
      title: 'Discord · franja de creators',
      pillVariant: 'external',
      pillText: 'Misma invitación Discord',
      bodyHtml: `<p><strong>Slide 3.</strong> Creativos de creators abren la <strong>misma invitación Discord</strong>; pagos oficiales siguen en <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Abrir invitación Discord ↗</a></p>`,
    },
    {
      title: 'GIF central · splash Discord',
      pillVariant: 'external',
      pillText: 'Invitación Discord Maison Looks',
      bodyHtml: `<p><strong>Columna central · superior.</strong> GIF animado con el mismo destino Discord para fijar cronologías en el servidor.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Abrir invitación Discord ↗</a></p>`,
    },
    {
      title: 'Maison Looks · escaparate',
      pillVariant: 'external',
      pillText: 'Abre maisonlooks.com',
      bodyHtml: `<p><strong>Columna central · inferior izquierda.</strong> Abre el hub <strong>inglés de Maison Looks</strong> — vuelve a pegar enlaces en <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Abrir inicio Maison Looks ↗</a></p>`,
    },
    {
      title: 'How to buy · cartón del sitio',
      pillVariant: 'internal',
      pillText: 'Guía en mulebuyai.com',
      bodyHtml: `<p><strong>Columna central · inferior derecha.</strong> Estilo HOW TO BUY enlaza nuestra checklist compatible con spreadsheet — cargos solo en <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> autenticado.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guía Cómo comprar →</a></p>`,
    },
    {
      title: 'Global Creators Program · evento Mulebuy (espejo)',
      pillVariant: 'internal',
      pillText: 'Briefing completo en mulebuyai.com',
      bodyHtml: `<p><strong>Riel alto a la derecha.</strong> Espejo editorial del <strong>Global Creators Program</strong> (niveles de recompensa por vídeo). Alta y pagos siguen en los flujos autenticados de <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> — no solo en pies de foto de Discord.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Detalle completo del programa →</a></p>`,
    },
  ],
  official: {
    badge: 'Extractos espejo · Mulebuy',
    faqHubLabel: 'Ayuda Mulebuy en vivo ↗',
    metaHtml: `Los acordeones archivan breves avisos Mulebuy para lectura offline. Despliega cualquier fila para ver la redacción congelada. Si algo discrepa de la realidad de envío, confía en el <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">centro de ayuda Mulebuy en vivo</a>. Debajo hay <strong>{count}</strong> extractos enlazados.`,
    sourcePageLabel: 'Referencia de fuente ↗',
  },
  stepsHeading: 'Lista operativa',
  stepListItemsHtml: [
    `<strong>Elige un carril con intención.</strong> Desde el <a href="{homeCuratedUrl}">mosaico de categorías</a> abre solo el que coincide con tu búsqueda para mantener filtros Spreadsheet ajustados.`,
    `<strong>Detente en un SKU real.</strong> Las vistas detalle conservan matrices de variantes; páginas genéricas de tienda rara vez sobreviven a disputas.`,
    `<strong>Copia la URL fiable.</strong> Prefiere compartir/previews que sigan resolviendo al mismo SKU tras recargar — no envoltorios iframe ni volcados de captura.`,
    `<strong>Pega dentro de Mulebuy.</strong> En <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>, usa la UI de intake de este mes y refleja cada selector que exigió el anuncio.`,
    `<strong>Financia lo nacional vía Mulebuy.</strong> Recargos de ruteo, medidas y solicitudes de foto pertenecen a su ledger.`,
    `<strong>QC antes de aprobar exportación.</strong> Trata la foto inbound como evidencia contractual — impugna fallos antes de aceptar etiquetas internacionales.`,
    `<strong>Reserva salida con sobriedad.</strong> Las sorpresas DIM mandan en zapatillas voluminosas y chaquetas térmicas; pistas de spreadsheet no son facturas.`,
  ],
  tipsHeading: 'Rieles de cordura',
  tipListItemsHtml: [
    `Empareja este escritorio con <a href="{howToUrl}">Cómo comprar</a> cuando quieras coreografía literal de la UI.`,
    `Las pestañas privadas de hoja siguen siendo tuyas — este hub no sincroniza Google Sheets ni columnas CSV.`,
    `Las APIs de flete y el ledger quedan en Mulebuy; aquí solo publicamos prosa.`,
  ],
  disclaimerHtml: `<strong>Descargo:</strong> síntesis editorial. Responsabilidad por bienes prohibidos, reembolsos, aranceles y transportistas recae en Mulebuy, vendedores, empresas de envío y reguladores — verifica listados personalmente.`,
  howToSchema: {
    name: 'Siete golpes desde browse Spreadsheet hasta envío Mulebuy',
    description:
      'Elige carril → prueba SKU → eleva URL → intake Mulebuy → liquida nacional → lee QC de almacén → reserva courier con juicio.',
    step: [
      {
        name: 'Abrir el chip de carril',
        text: 'Toca el carril de la página de inicio que coincida con tu intención para que los filtros Spreadsheet hereden la taxonomía correcta.',
      },
      {
        name: 'Cargar el anuncio que financiarás',
        text: 'Permanece en el chrome de detalle hasta que medidas, colores y galerías parezcan coherentes.',
      },
      {
        name: 'Cosechar URL estable tras recarga',
        text: 'Copia la dirección que conserva la variante tras actualizar — evita redirecciones entre escaparates.',
      },
      {
        name: 'Caer en intake Mulebuy',
        text: 'Autentícate, pega y confirma opciones exactamente como exigió el marketplace.',
      },
      {
        name: 'Pagar cargos nacionales',
        text: 'Deja que socios Mulebuy terminen el tramo nacional antes de esperar subidas QC.',
      },
      {
        name: 'Leer QC como inspector',
        text: 'Amplía paneles, logos, herrajes y tejidos — abre tickets antes de aprobar exportaciones.',
      },
      {
        name: 'Elegir servicio internacional con criterio',
        text: 'Compara responsabilidad, seguro y volumetría; los recibos landed deben superar celdas ingenuas de spreadsheet.',
      },
    ],
  },
};

const fr: NewsCopy = {
  title: 'Research desk · contexte Mulebuy Spreadsheet, bandeaux & hygiène du collage | mulebuyai.com',
  description:
    'Couche éditoriale réécrite pour acheteurs pilotés par spreadsheet : décoder les bandeaux d’accueil, lire les tuiles sans hype, parcourir hors ligne des annonces Mulebuy miroir et répéter attentes QC/fret avant de financer quoi que ce soit sur mulebuy.com.',
  keywords:
    'research desk Mulebuy spreadsheet, briefing catalogue spreadsheet, avis miroir agent, QC entrepôt primaire, réalisme fret, hygiène URL collage Mulebuy',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Actualités & guides',
  topIntroHtml: `Vous préférez le pas à pas ? Ouvrez le <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">playbook de collage Mulebuy Spreadsheet</a>. Des timelines chaotiques d’acheteurs ? Sous <a href="{buyerUrl}">Retours acheteurs</a> nous regroupons des récits communautaires. Taxes, frais et menus courier changent souvent — votre tableau de bord <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> authentifié fait foi. mulebuyai.com ne détient pas de portefeuilles et n’imprime pas d’étiquettes.`,
  featuredBannerHeading: 'Lire la bande d’accueil',
  featuredBannerIntroHtml: `La bande rotative sous <a href="{homeCuratedUrl}">Explorer les catégories</a> reprend les <strong>mêmes sept créations</strong> que la rangée promo du hero — Raise A Kitty, carrousel Discord + GIF central, raccourci Maison Looks, carte HOW TO BUY et le rail vertical droit du <strong>Global Creators Program</strong>.`,
  activityHeading: 'Ce que chaque tuile de bandeau cherche à dire',
  activityIntroHtml: `Les cartes calquent <strong>l’ordre de cette bande sur la page d’accueil</strong>. Les règles définitives viennent de la <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">messagerie Mulebuy en direct</a> et des mods Discord — ici seulement un miroir éditorial.`,
  activityItems: [
    {
      title: 'Raise A Kitty · événement Mulebuy (miroir)',
      pillVariant: 'internal',
      pillText: 'Texte intégral sur mulebuyai.com',
      bodyHtml: `<p><strong>Carrousel gauche · slide 1.</strong> Miroir complet de <strong>Raise A Kitty</strong> (coupons &amp; points). Participation <strong>uniquement dans l’app Mulebuy</strong> — vérifiez les dates dans leur UI.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Détail complet de l’activité →</a></p>`,
    },
    {
      title: 'Discord · bandeau giveaways',
      pillVariant: 'external',
      pillText: 'Invitation Discord Maison Looks',
      bodyHtml: `<p><strong>Slide 2.</strong> Création voyante vers le <strong>Discord Maison Looks partagé</strong>. Confirmez les tirages avec les mods — aucun crédit automatique ici.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Ouvrir l’invite Discord ↗</a></p>`,
    },
    {
      title: 'Discord · bandeau créateurs',
      pillVariant: 'external',
      pillText: 'Même invitation Discord',
      bodyHtml: `<p><strong>Slide 3.</strong> Visuels créateurs ouvrent la <strong>même invitation Discord</strong> ; les règles de paiement officielles restent sur <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Ouvrir l’invite Discord ↗</a></p>`,
    },
    {
      title: 'GIF central · splash Discord',
      pillVariant: 'external',
      pillText: 'Invitation Discord Maison Looks',
      bodyHtml: `<p><strong>Colonne centrale · haut.</strong> GIF animé avec la même URL Discord pour épingler les annonces côté serveur.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Ouvrir l’invite Discord ↗</a></p>`,
    },
    {
      title: 'Maison Looks · vitrine',
      pillVariant: 'external',
      pillText: 'Ouvre maisonlooks.com',
      bodyHtml: `<p><strong>Colonne centrale · bas gauche.</strong> Ouvre le hub <strong>anglais Maison Looks</strong> — reprenez les liens dans <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Ouvrir l’accueil Maison Looks ↗</a></p>`,
    },
    {
      title: 'How to buy · carte sur site',
      pillVariant: 'internal',
      pillText: 'Guide sur mulebuyai.com',
      bodyHtml: `<p><strong>Colonne centrale · bas droite.</strong> Style HOW TO BUY vers notre checklist spreadsheet — débits uniquement sur <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> authentifié.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guide Comment acheter →</a></p>`,
    },
    {
      title: 'Global Creators Program · événement Mulebuy (miroir)',
      pillVariant: 'internal',
      pillText: 'Brief complet sur mulebuyai.com',
      bodyHtml: `<p><strong>Rail haut à droite.</strong> Miroir éditorial du <strong>Global Creators Program</strong> Mulebuy (paliers de prime vidéo). Inscription et paiements restent dans les parcours <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> authentifiés — pas seulement les légendes Discord.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Détail complet du programme créateurs →</a></p>`,
    },
  ],
  official: {
    badge: 'Extraits miroir · Mulebuy',
    faqHubLabel: 'Aide Mulebuy en direct ↗',
    metaHtml: `Les accordéons archivent de courts avis Mulebuy pour lecture hors ligne. Déployez une ligne pour voir la formulation figée. En cas d’écart avec la réalité d’expédition, faites confiance au <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">centre d’aide Mulebuy en direct</a>. <strong>{count}</strong> extraits sont liés ci-dessous.`,
    sourcePageLabel: 'Référence source ↗',
  },
  stepsHeading: 'Checklist opérationnelle',
  stepListItemsHtml: [
    `<strong>Choisissez un rail délibérément.</strong> Depuis la <a href="{homeCuratedUrl}">mosaïque catégories</a>, ne lancez que la voie qui colle à votre recherche pour garder des filtres Spreadsheet serrés.`,
    `<strong>Arrêtez-vous sur un vrai SKU.</strong> Les vues détail conservent les matrices de variantes ; les pages vitrine génériques survivent rarement aux litiges.`,
    `<strong>Copiez l’URL durable.</strong> Préférez partages ou aperçus qui résolvent encore le même SKU après rechargement — pas d’iframes ni dumps captures.`,
    `<strong>Collez dans Mulebuy.</strong> Sur <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>, utilisez l’UI d’intake du mois et reflétez chaque sélecteur exigé par l’annonce.`,
    `<strong>Financez le domestique via Mulebuy.</strong> Surcharges de routage, mesures et demandes photo relèvent de leur ledger.`,
    `<strong>QC avant validation export.</strong> Traitez la photo inbound comme preuve contractuelle — contestez avant d’accepter les étiquettes internationales.`,
    `<strong>Réservez l’outbound sobrement.</strong> Les surprises DIM dominent baskets volumineuses et doudounes ; les indices spreadsheet ne sont pas des factures.`,
  ],
  tipsHeading: 'Garde-fous',
  tipListItemsHtml: [
    `Associez ce desk à <a href="{howToUrl}">Comment acheter</a> pour une chorégraphie UI littérale.`,
    `Vos onglets tableur privés restent les vôtres — ce hub ne synchronise ni Google Sheets ni colonnes CSV.`,
    `API fret et ledger restent chez Mulebuy ; nous publions seulement de la prose.`,
  ],
  disclaimerHtml: `<strong>Avertissement :</strong> synthèse éditoriale. Responsabilité marchandises interdites, remboursements, droits et transporteurs : Mulebuy, vendeurs, fret et régulateurs — vérifiez chaque annonce.`,
  howToSchema: {
    name: 'Sept temps du browse Spreadsheet à l’expédition Mulebuy',
    description:
      'Choix de rail → preuve SKU → URL stable → intake Mulebuy → règlement domestique → lecture QC entrepôt → réservation courier réfléchie.',
    step: [
      {
        name: 'Ouvrir le chip de rail',
        text: 'Touchez le rail d’accueil qui correspond à votre intention pour que les filtres Spreadsheet héritent de la bonne taxonomie.',
      },
      {
        name: 'Charger l’annonce que vous financez',
        text: 'Restez dans le chrome détail jusqu’à ce que mesures, couleurs et galeries soient cohérents.',
      },
      {
        name: 'Récolter une URL reload-safe',
        text: 'Copiez l’adresse qui conserve la variante après rafraîchissement — évitez les redirections entre vitrines.',
      },
      {
        name: 'Basculer dans l’intake Mulebuy',
        text: 'Authentifiez, collez et confirmez les options exactement comme l’exigeait la place de marché.',
      },
      {
        name: 'Payer les frais domestiques',
        text: 'Laissez les partenaires Mulebuy boucler le segment national avant d’attendre les uploads QC.',
      },
      {
        name: 'Lire le QC comme un inspecteur',
        text: 'Zoomez panneaux, logos, quincaillerie et textiles — ouvrez des tickets avant d’approuver l’export.',
      },
      {
        name: 'Choisir le service international avec discernement',
        text: 'Comparez responsabilité, assurance et volumétrie ; les reçus landed doivent battre les cellules spreadsheet naïves.',
      },
    ],
  },
};

const it: NewsCopy = {
  title: 'Research desk · contesto Mulebuy Spreadsheet, banner & igiene degli incolla | mulebuyai.com',
  description:
    'Strato editoriale riscritto per chi acquista guidato da spreadsheet: decodificare le strisce home, leggere le tessere senza hype, sfogliare offline avvisi Mulebuy specchiati e provare aspettative QC/freight prima di finanziare qualsiasi cosa su mulebuy.com.',
  keywords:
    'research desk Mulebuy spreadsheet, briefing catalogo spreadsheet, avvisi specchiati agente, QC magazzino primaria, realismo freight, igiene URL incolla Mulebuy',
  backHomeLabel: '← Torna alla home',
  h1: 'Notizie & guide',
  topIntroHtml: `Preferisci il passo dopo passo? Apri il <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">playbook incolla Mulebuy Spreadsheet</a>. Cronologie confuse degli acquirenti? In <a href="{buyerUrl}">Voci acquirenti</a> raccogliamo testi di community. Tasse, commissioni e menu corriere cambiano spesso — la dashboard autenticata <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> fa fede. mulebuyai.com non custodisce wallet né stampa etichette.`,
  featuredBannerHeading: 'Leggere la striscia in homepage',
  featuredBannerIntroHtml: `La fascia rotante sotto <a href="{homeCuratedUrl}">Esplora categorie</a> riusa gli <strong>stessi sette creativi</strong> della fila promo dell’hero — Raise A Kitty, carosello Discord + GIF centrale, scorciatoia Maison Looks, card HOW TO BUY e il rail alto destro del <strong>Global Creators Program</strong>.`,
  activityHeading: 'Cosa vuole dire ogni tessera della fascia',
  activityIntroHtml: `Le card rispecchiano <strong>l’ordine di quella fascia in homepage</strong>. Regole e premi definitivi arrivano dalla <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">messaggistica Mulebuy live</a> e dai mod Discord — qui solo mirror editoriale.`,
  activityItems: [
    {
      title: 'Raise A Kitty · evento Mulebuy (mirror)',
      pillVariant: 'internal',
      pillText: 'Testo completo su mulebuyai.com',
      bodyHtml: `<p><strong>Carosello sinistro · slide 1.</strong> Mirror completo di <strong>Raise A Kitty</strong> (coupon e punti). Partecipazione <strong>solo nell’app Mulebuy</strong> — verifica scadenze nella loro UI.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Dettaglio completo dell’attività →</a></p>`,
    },
    {
      title: 'Discord · striscia giveaways',
      pillVariant: 'external',
      pillText: 'Invite Discord Maison Looks',
      bodyHtml: `<p><strong>Slide 2.</strong> Arte rumorosa verso il <strong>Discord condiviso Maison Looks</strong>. Conferma estrazioni con i mod — nessun saldo automatico qui.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Apri invite Discord ↗</a></p>`,
    },
    {
      title: 'Discord · striscia creators',
      pillVariant: 'external',
      pillText: 'Stesso invite Discord',
      bodyHtml: `<p><strong>Slide 3.</strong> I visual creator aprono lo <strong>stesso invite Discord</strong>; payout ufficiali restano su <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Apri invite Discord ↗</a></p>`,
    },
    {
      title: 'GIF centrale · splash Discord',
      pillVariant: 'external',
      pillText: 'Invite Discord Maison Looks',
      bodyHtml: `<p><strong>Colonna centrale · alto.</strong> GIF animata con la stessa destinazione Discord per timeline fissate nel server.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Apri invite Discord ↗</a></p>`,
    },
    {
      title: 'Maison Looks · vetrina',
      pillVariant: 'external',
      pillText: 'Apre maisonlooks.com',
      bodyHtml: `<p><strong>Colonna centrale · basso sinistra.</strong> Apre l’hub <strong>inglese Maison Looks</strong> — incolla di nuovo in <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Apri home Maison Looks ↗</a></p>`,
    },
    {
      title: 'How to buy · card on-site',
      pillVariant: 'internal',
      pillText: 'Guida su mulebuyai.com',
      bodyHtml: `<p><strong>Colonna centrale · basso destra.</strong> Stile HOW TO BUY verso la nostra checklist spreadsheet — addebiti solo su <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> autenticato.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guida Come acquistare →</a></p>`,
    },
    {
      title: 'Global Creators Program · evento Mulebuy (mirror)',
      pillVariant: 'internal',
      pillText: 'Briefing completo su mulebuyai.com',
      bodyHtml: `<p><strong>Rail alto a destra.</strong> Mirror editoriale del <strong>Global Creators Program</strong> Mulebuy (livelli premio video). Iscrizione e payout restano nei flussi <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> autenticati — non solo didascalie Discord.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Dettaglio completo del programma creators →</a></p>`,
    },
  ],
  official: {
    badge: 'Estratti specchiati · Mulebuy',
    faqHubLabel: 'Aiuto Mulebuy live ↗',
    metaHtml: `Gli accordion archiviano brevi avvisi Mulebuy per lettura offline. Espandi una riga per il testo congelato. Se qualcosa discorda dalla realtà di spedizione, fai riferimento al <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">centro aiuto Mulebuy live</a>. Sotto sono collegati <strong>{count}</strong> estratti.`,
    sourcePageLabel: 'Riferimento fonte ↗',
  },
  stepsHeading: 'Checklist operativa',
  stepListItemsHtml: [
    `<strong>Scegli una corsia deliberatamente.</strong> Dal <a href="{homeCuratedUrl}">mosaico categorie</a> apri solo la traccia della tua ricerca così i filtri Spreadsheet restano stretti.`,
    `<strong>Fermati su uno SKU vero.</strong> Le viste dettaglio preservano matrici varianti; home generiche raramente reggono contestazioni.`,
    `<strong>Copia l’URL affidabile.</strong> Preferisci condivisioni/anteprime che risolvono ancora lo stesso SKU dopo reload — niente iframe o dump screenshot.`,
    `<strong>Incolla dentro Mulebuy.</strong> Su <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a> usa l’UI intake del mese e rispecchia ogni selettore richiesto dall’annuncio.`,
    `<strong>Finanzia il domestico tramite Mulebuy.</strong> Supplementi routing, misure e richieste foto stanno nel loro ledger.`,
    `<strong>QC prima dell’export.</strong> Tratta le foto inbound come prova contrattuale — contesta prima di accettare etichette internazionali.`,
    `<strong>Prenota outbound con sobrietà.</strong> Sorprese DIM dominano su sneaker voluminose e giacche isolate; gli hint spreadsheet non sono fatture.`,
  ],
  tipsHeading: 'Guide di sanità',
  tipListItemsHtml: [
    `Abbina questa scrivania a <a href="{howToUrl}">Come acquistare</a> quando vuoi coreografia UI letterale.`,
    `Le schede foglio private restano tue — questo hub non sincronizza Google Sheets né colonne CSV.`,
    `API freight e ledger restano in Mulebuy; qui pubblichiamo solo prosa.`,
  ],
  disclaimerHtml: `<strong>Disclaimer:</strong> sintesi editoriale. Responsabilità per merci vietate, rimborsi, dazi e corrieri ricade su Mulebuy, venditori, vettori e regolatori — verifica personalmente le schede.`,
  howToSchema: {
    name: 'Sette battute dal browse Spreadsheet alla spedizione Mulebuy',
    description:
      'Scelta corsia → prova SKU → solleva URL → intake Mulebuy → saldo domestico → lettura QC magazzino → prenotazione courier consapevole.',
    step: [
      {
        name: 'Apri il chip corsia',
        text: 'Tocca la corsia home che coincide con l’intento così i filtri Spreadsheet ereditano la tassonomia giusta.',
      },
      {
        name: 'Carica l’annuncio che finanzierai',
        text: 'Resta nel chrome dettaglio finché misure, colori e gallery risultano coerenti.',
      },
      {
        name: 'Raccogli URL stabile al reload',
        text: 'Copia l’indirizzo che mantiene la variante dopo aggiornamento — evita redirect tra vetrine.',
      },
      {
        name: 'Entra nell’intake Mulebuy',
        text: 'Autentica, incolla e conferma opzioni esattamente come richiesto dal marketplace.',
      },
      {
        name: 'Paga oneri domestici',
        text: 'Lascia ai partner Mulebuy chiudere il tratto nazionale prima di aspettarti upload QC.',
      },
      {
        name: 'Leggi QC come ispettore',
        text: 'Ingrandisci pannelli, loghi, ferramenta e tessuti — apri ticket prima di approvare export.',
      },
      {
        name: 'Scegli servizio internazionale con criterio',
        text: 'Confronta responsabilità, assicurazione e volumetria; gli scontrini landed devono battere celle spreadsheet ingenue.',
      },
    ],
  },
};

const pl: NewsCopy = {
  title: 'Research desk · kontekst Mulebuy Spreadsheet, wstęgi strony i higiena wklejania | mulebuyai.com',
  description:
    'Przepisana warstwa redakcyjna dla kupujących przez spreadsheet: odczyt pasków na stronie głównej, interpretacja kafelków bez hype’u, przeglądanie offline lustrzanych komunikatów Mulebuy i próba oczekiwania QC/freight zanim zasilisz cokolwiek na mulebuy.com.',
  keywords:
    'research desk Mulebuy spreadsheet, briefing katalog spreadsheet, lustrzane komunikaty agenta, podstawy QC magazynu, realizm freight, higiena URL wklejania Mulebuy',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Aktualności i poradniki',
  topIntroHtml: `Wolisz krok po kroku? Otwórz <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">playbook wklejania Mulebuy Spreadsheet</a>. Chaotyczne osie czasu od kupujących? W <a href="{buyerUrl}">Głosy kupujących</a> zbieramy teksty społeczności. Podatki, opłaty i menu kurierów często się zmieniają — autoryzowany panel <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> jest wiążący. mulebuyai.com nie przechowuje portfeli ani nie drukuje etykiet.`,
  featuredBannerHeading: 'Czytanie wstęgi na stronie głównej',
  featuredBannerIntroHtml: `Rotujący pasek pod <a href="{homeCuratedUrl}">Przeglądaj kategorie</a> używa <strong>tych samych siedmiu kreacji</strong> co rząd promo przy hero — Raise A Kitty, karuzela Discord + środkowy GIF, skrót Maison Looks, kafelek HOW TO BUY oraz wysoki <strong>Global Creators Program</strong> po prawej.`,
  activityHeading: 'Co każdy kafelek wstęgi próbuje zakomunikować',
  activityIntroHtml: `Karty powtarzają <strong>kolejność tej wstęgi na stronie głównej</strong>. Zasady i nagrody rozstrzyga <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">komunikacja Mulebuy na żywo</a> oraz moderatorzy Discord — tutaj tylko lustro editorialne.`,
  activityItems: [
    {
      title: 'Raise A Kitty · wydarzenie Mulebuy (lustro)',
      pillVariant: 'internal',
      pillText: 'Pełny tekst na mulebuyai.com',
      bodyHtml: `<p><strong>Lewa karuzela · slajd 1.</strong> Pełne lustro kampanii <strong>Raise A Kitty</strong> (kupony wysyłki i punkty). Udział tylko w <strong>aplikacji Mulebuy</strong> — terminy sprawdzaj w ich UI.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}">Pełny opis aktywności →</a></p>`,
    },
    {
      title: 'Discord · pas giveaway',
      pillVariant: 'external',
      pillText: 'Zaproszenie Discord Maison Looks',
      bodyHtml: `<p><strong>Slajd 2.</strong> Głośna grafika prowadzi do <strong>wspólnego Discord Maison Looks</strong>. Losowania potwierdzaj z modami — tu nie ma automatycznego salda.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Otwórz zaproszenie Discord ↗</a></p>`,
    },
    {
      title: 'Discord · pas creators',
      pillVariant: 'external',
      pillText: 'To samo zaproszenie Discord',
      bodyHtml: `<p><strong>Slajd 3.</strong> Grafiki creators otwierają <strong>to samo zaproszenie Discord</strong>; oficjalne zasady wypłat zostają na <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}" target="_blank" rel="noopener noreferrer">Otwórz zaproszenie Discord ↗</a></p>`,
    },
    {
      title: 'Środkowy GIF · splash Discord',
      pillVariant: 'external',
      pillText: 'Zaproszenie Discord Maison Looks',
      bodyHtml: `<p><strong>Kolumna środkowa · góra.</strong> Animowany GIF z tym samym celem Discord pod pinowane ogłoszenia.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Otwórz zaproszenie Discord ↗</a></p>`,
    },
    {
      title: 'Maison Looks · witryna',
      pillVariant: 'external',
      pillText: 'Otwiera maisonlooks.com',
      bodyHtml: `<p><strong>Kolumna środkowa · dół lewy.</strong> Otwiera angielski <strong>hub Maison Looks</strong> — linki wklej ponownie w <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Otwórz stronę główną Maison Looks ↗</a></p>`,
    },
    {
      title: 'How to buy · kafelek na stronie',
      pillVariant: 'internal',
      pillText: 'Poradnik na mulebuyai.com',
      bodyHtml: `<p><strong>Kolumna środkowa · dół prawy.</strong> Styl HOW TO BUY prowadzi do naszej checklisty spreadsheet — obciążenia tylko w zalogowanym <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a>.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Poradnik Jak kupować →</a></p>`,
    },
    {
      title: 'Global Creators Program · wydarzenie Mulebuy (lustro)',
      pillVariant: 'internal',
      pillText: 'Pełny briefing na mulebuyai.com',
      bodyHtml: `<p><strong>Wysoki panel po prawej.</strong> Lustrzane omówienie <strong>Global Creators Program</strong> (progi nagród za wideo). Zapis i wypłaty pozostają w uwierzytelnionych ścieżkach <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">Mulebuy</a> — nie tylko w podpisach Discord.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap6}">Pełny opis programu creators →</a></p>`,
    },
  ],
  official: {
    badge: 'Lustrzane fragmenty komunikatów · Mulebuy',
    faqHubLabel: 'Pomoc Mulebuy na żywo ↗',
    metaHtml: `Akordeony archiwizują krótkie komunikaty Mulebuy do czytania offline. Rozwiń wiersz, by zobaczyć zamrożone brzmienie. Gdy coś nie zgadza się z rzeczywistością wysyłki, ufaj <a href="{mulebuyIssueUrl}" target="_blank" rel="noopener noreferrer">żywemu centrum pomocy Mulebuy</a>. Poniżej powiązano <strong>{count}</strong> fragmentów.`,
    sourcePageLabel: 'Odniesienie do źródła ↗',
  },
  stepsHeading: 'Lista operacyjna',
  stepListItemsHtml: [
    `<strong>Wybierz świadomie pas.</strong> Z <a href="{homeCuratedUrl}">mozaiki kategorii</a> uruchom tylko ten pas, który pasuje do polowania — filtry Spreadsheet zostaną ciasne.`,
    `<strong>Zatrzymaj się przy prawdziwym SKU.</strong> Widoki szczegółów zachowują macierze wariantów; ogólne strony sklepów rzadko przetrwają spory.`,
    `<strong>Skopiuj trwały URL.</strong> Preferuj udostępnienia/podglądy, które po przeładowaniu nadal prowadzą do tego samego SKU — bez ramek iframe i zrzutów ekranu.`,
    `<strong>Wklej w Mulebuy.</strong> Na <a href="{mulebuyHomeUrl}" target="_blank" rel="noopener noreferrer">mulebuy.com</a> użyj UI intake z tego miesiąca i odtwórz każdy selektor wymagany przez ogłoszenie.`,
    `<strong>Opłać krajowo przez Mulebuy.</strong> Dopłaty routingu, pomiary i zlecenia zdjęć należą do ich księgi.`,
    `<strong>QC przed eksportem.</strong> Fotografię inbound traktuj jako dowód umowny — kwestionuj wady zanim zaakceptujesz międzynarodowe etykiety.`,
    `<strong>Rezerwuj outbound trzeźwo.</strong> Niespodzianki DIM dominują przy gabarytowych sneakach i kurtkach — podpowiedzi z arkusza to nie faktury.`,
  ],
  tipsHeading: 'Poruszenia rzeczywistości',
  tipListItemsHtml: [
    `Połącz ten biurko z <a href="{howToUrl}">Jak kupować</a>, gdy chcesz dosłownych kroków UI.`,
    `Prywatne karty arkusza zostają Twoje — hub nie synchronizuje Google Sheets ani kolumn CSV.`,
    `API freight i ledger zostają w Mulebuy; publikujemy tylko prozę.`,
  ],
  disclaimerHtml: `<strong>Uwaga:</strong> synteza redakcyjna. Odpowiedzialność za zakazy, zwroty, cła i przewoźników ponoszą Mulebuy, sprzedawcy, firmy spedycyjne i regulatorzy — zweryfikuj ogłoszenia osobiście.`,
  howToSchema: {
    name: 'Siedem uderzeń od przeglądu Spreadsheet do wysyłki Mulebuy',
    description:
      'Wybór pasa → dowód SKU → podniesienie URL → intake Mulebuy → rozliczenie krajowe → odczyt QC magazynu → świadoma rezerwacja kuriera.',
    step: [
      {
        name: 'Otwórz chip pasa',
        text: 'Dotknij pas na stronie głównej zgodny z intencją, by filtry Spreadsheet odziedziczyły właściwą taksonomię.',
      },
      {
        name: 'Załaduj ogłoszenie, które sfinansujesz',
        text: 'Zostań w chrome szczegółów, aż wymiary, kolory i galeria będą spójne.',
      },
      {
        name: 'Zbierz URL stabilny po przeładowaniu',
        text: 'Skopiuj adres, który po odświeżeniu zachowuje wariant — unikaj przekierowań między witrynami.',
      },
      {
        name: 'Wejdź do intake Mulebuy',
        text: 'Uwierzytelnij, wklej i potwierdź opcje dokładnie tak, jak wymagał marketplace.',
      },
      {
        name: 'Opłać koszty krajowe',
        text: 'Pozwól partnerom Mulebuy domknąć odcinek krajowy zanim oczekujesz uploadów QC.',
      },
      {
        name: 'Czytaj QC jak inspektor',
        text: 'Powiększaj panele, logo, okucia i tkaniny — otwieraj zgłoszenia przed akceptacją eksportu.',
      },
      {
        name: 'Wybierz usługę międzynarodową rozważnie',
        text: 'Porównaj odpowiedzialność, ubezpieczenie i kubaturę; paragony landed powinny przebić naiwne komórki arkusza.',
      },
    ],
  },
};

export const NEWS_PAGE_COPY: Record<RouteLocale, NewsCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getNewsCopy(locale: string): NewsCopy {
  const lc = locale as RouteLocale;
  return NEWS_PAGE_COPY[lc] ?? en;
}

export function newsHowToJsonLd(copy: NewsCopy, inLanguage: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.howToSchema.name,
    description: copy.howToSchema.description,
    inLanguage,
    totalTime: 'PT20M',
    step: copy.howToSchema.step.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
  };
}
