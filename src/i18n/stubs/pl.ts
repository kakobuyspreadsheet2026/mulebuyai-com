import type { HomeStubContent } from '../types';
import { mlSpreadsheetMulebuy } from '../../consts';
import { pillsFor } from './categoryPaths';

export const plHome: HomeStubContent = {
  title:
    'Notatki polowe Mulebuy Spreadsheet — indeksowany finder, linki gotowe do wklejenia & realizm kosztu docelowego | mulebuyai.com',
  description:
    'Poradniki Mulebuy Spreadsheet: indeksowany katalog, czyste URL-e marketplace do wklejenia, QC i fracht. Redakcja na mulebuyai.com — płatności na mulebuy.com.',
  keywords:
    'poradnik Mulebuy spreadsheet, indeksowany katalog spreadsheet Mulebuy, finder Weidian Taobao 1688, workflow URL wklejanie, czytanie QC magazynu, realizm frachtu agenta, hub redakcyjny mulebuyai',
  webPageName: 'Mulebuy Spreadsheet · niezależne biuro referencyjne · mulebuyai.com',
  webPageKeywords: [
    'Workflow Mulebuy spreadsheet',
    'Przeglądanie indeksowanego katalogu',
    'Higiena URL marketplace',
    'QC magazynu Mulebuy',
    'Realistyczny fracht międzynarodowy',
    'Redakcyjne notatki zakupowe',
  ],
  hero: {
    h1: 'Mulebuy Spreadsheet · notatki polowe',
    tagline: 'Odkrywaj w siatce — finalizuj w Mulebuy',
    kicker:
      '2026 · katalog w stylu arkusza · Taobao · Weidian · 1688 · ścieżka wklejania Mulebuy',
    body:
      'mulebuyai.com wyjaśnia, jak kupujący ery spreadsheet przechodzą od kurowanych pasów katalogu do czystych stron ogłoszeń, a potem do Mulebuy po wyceny, krajowy forwarding, zdjęcia magazynowe i etykiety wyjściowe. Publikujemy kontekst i słownik — nie koszyki, księgi ani kolejki ticketów.',
    ctaBrowse: 'Otwórz indeksowany przegląd Spreadsheet →',
    ctaLogin: 'Kontynuuj w Mulebuy',
    heroPlaneAlt:
      'mulebuy spreadsheet · dekoracyjny motyw hero · hub redakcyjny mulebuyai.com',
    searchAria:
      'Szukaj fraz kontekstu katalogu spreadsheet (wyniki otwierają zewnętrzny browse)',
    searchPlaceholder: 'Silwetki, sklepy, przezwiska batchy…',
    searchByImage: 'Szukanie obrazem',
    searchSubmit: 'Szukaj',
    searchByImageAria:
      'Otwórz odkrywanie prowadzone obrazem dla tego samego stosu indeksowanego katalogu spreadsheet',
  },
  categoriesAria: 'Skróty do filtrów indeksowanego katalogu Spreadsheet',
  exploreTitle: 'Przeglądaj według pasa — dokończ w Mulebuy',
  redditAria: 'Reddit · społeczność r/mulebuyfinds (nowa karta)',
  redditSnooAlt:
    'mulebuy spreadsheet · Reddit Snoo · wątki haul społeczności',
  exploreKickerLead: 'Wybierz pas, aby uruchomić ',
  exploreKickerTrail: '',
  exploreIntro:
    'Każdy skrót otwiera sparowany plaster katalogu Spreadsheet, by zweryfikować siatki rozmiarów, notatki sprzedawcy i zdjęcia inline zanim skopiujesz URL ogłoszenia do Mulebuy. Kultura arkusza ceni tempo; agenci nadal wymagają literalnych SKU.',
  exploreSub:
    'Kafelki celowo otwierają drugą kartę, by ta strona briefingowa mogła zostać obok sesji agenta.',
  introH2: 'Dlaczego workflow spreadsheet nadal ma znaczenie obok dopracowanych witryn',
  introP:
    'Dla kupujących w kontekście Mulebuy Spreadsheet indeksowane siatki ściskają odkrywanie: grupują silwetki, pokazują powracające batche i oznaczają skrótowe sygnały ryzyka. Nic z tego nie zastępuje matematyki checkout Mulebuy — nogi krajowe, stanowiska QC, okna konsolidacji i tabele DIM kuriera żyją wyłącznie na mulebuy.com.',
  guideH2: 'Primer prostym językiem · jak przegląd Mulebuy Spreadsheet zasila Mulebuy',
  guideIntro:
    'Poniższe sekcje to przepisane notatki polowe Mulebuy Spreadsheet — inna ramka niż ogólne landingi agentów. Używaj ich do orientacji nowych, odświeżania higieny URL u weteranów i studzenia nierealnych oczekiwań frachtu zanim ktoś kliknie „zapłać”. Gdy żywy tekst Mulebuy się z nami nie zgadza, wygrywa Mulebuy.',
  sections: [
    {
      h3: '1 · Co ludzie dziś mają na myśli mówiąc „Mulebuy Spreadsheet”',
      paragraphs: [
        'Zwykle chodzi o dowolny skuratowany indeks — Arkusze Google, tabele Notion lub skórki katalogu — który ustawia chińskie URL-e marketplace obok gadki o rozmiarach, przezwisk batchy, podpowiedzi yuan lub zrzutów QC. Myśl „żywa bibliografia”, nie magiczny feed stanów.',
        'Przegląd Mulebuy Spreadsheet w stylu MaisonLooks przejmuje nawyk: filtry pasów, zapisane wyszukiwania i miniatury QC, gdy sprzedawcy współpracują. Kontrakt mechaniczny bez zmian — wklejasz rozwiązany URL pozycji do Mulebuy i akceptujesz workflow krajowy + magazynowy, który Mulebuy pokazuje w tym tygodniu.',
      ],
    },
    {
      h3: '2 · Hub redakcyjny vs strona umowna',
      paragraphs: [
        'mulebuyai.com nie przyjmuje płatności, nie drukuje etykiet i nie rozstrzyga sporów. Streśćmy mechanikę, odzwierciedlamy krótkie komunikaty gdy pomaga i linkujemy indeksowany przegląd Mulebuy Spreadsheet plus mulebuy.com. Wszystko brzmiące umownie należy do uwierzytelnionego UI Mulebuy.',
        'Wolontariusze kuratorzy Mulebuy Spreadsheet też nie mają pełnomocnictwa. Traktuj screenshoty Discord i makra arkuszy jak orientację — nie jak gwarancje konfiskat, zwrotów czy autentyczności.',
      ],
    },
    {
      h3: '3 · Wierność URL bije „czucie”',
      paragraphs: [
        'Kopiuj z paska adresu dokładny widok SKU — ID wariantów nietknięte. Owijki bez ID, gołe assety CDN, albumy Weidian lub korzenie witryn często rodzą ticket mismatch później.',
        'Gdy ktoś przekazuje skrócone przekierowania z wiersza Mulebuy Spreadsheet lub zrzutu na Discordzie, rozwiąż je w całości przed finansowaniem. Agenci kupują to, do czego URL rozwiązuje się przy submit — nie to, co pamiętasz z wczorajszej karty.',
      ],
    },
    {
      h3: '4 · Glamour sprzedawcy vs dowód magazynu',
      paragraphs: [
        'Galerie ogłoszeń sprzedają — światło studyjne, ukryte szwy, kąty hero. Po inbound Mulebuy publikuje fotografię stołu do weryfikacji. Te kadry wygrywają spory o dryf koloru, gęstość haftu czy kaliber zamka.',
        'Gdy miniatury Mulebuy Spreadsheet rozjeżdżają się z pikselami magazynu, wstrzymaj wysyłkę międzynarodową, dopóki support nie uzna rozjazdu — po akceptacji etykiet eksportowych remediacje są drogie.',
      ],
    },
    {
      h3: '5 · Koszt docelowy to osobny arkusz',
      paragraphs: [
        'Komórki siatki Mulebuy Spreadsheet rzadko wymieniają dopłaty forwarding krajowy, wybór konsolidacji, przełączniki ubezpieczeń, klauzule paliwowe, spready FX lub kubaturowe pakowanie. Obuwie, warstwy i gęsta elektronika karzą wagę DIM najmocniej.',
        'Prowadź mini-księgę obok zakładek społeczności — osobiste średnie historyczne biją zaokrąlenia z czatu.',
      ],
    },
    {
      h3: '6 · Kuratorzy, cykle hype i ważność',
      paragraphs: [
        'Nawet sumienni redaktorzy Mulebuy Spreadsheet zostają w tyle za churn marketplace: batche się obracają, sklepy zmieniają nazwy z dnia na dzień, screenshoty „GL” się starzeją. Krzyżuj aktywne ogłoszenia i świeże dowody społeczności zanim zaufasz nostalgijnym wierszom.',
        'Gdy oferty wyglądają absurdalnie wobec materiałów i robocizny, zakładaj obrót stanem, przynętowe warianty lub źle odczytane rozmiary — nie tajne hurtownie odblokowywane hiperłączem.',
      ],
    },
    {
      h3: '7 · Powtarzające się tryby porażki w ticketach',
      paragraphs: [
        'Zgadywanie liter EU/US bez tabel cm/mm; akceptacja QC na nieczytelnych kadrowaniach z telefonu; ufanie liniom 1688 wrażliwym na MOQ bez reguł forwarding agenta; cytowanie komórek yuan z Mulebuy Spreadsheet jako landed duty-inclusive dla swojego kodu pocztowego.',
      ],
    },
    {
      h3: '8 · Łagodne normy dla społecznych siatek',
      paragraphs: [
        'Datuj duże odświeżenia, skreślaj zepsute URL zamiast je chować, notuj zamienniki inline i oddziel kolumny plotek od zweryfikowanych kliknięć. Zdrowe siatki Mulebuy Spreadsheet starzeją się powoli; zrzuty screenshot gniją od razu.',
      ],
    },
    {
      h3: '9 · Zmienność stanów to stan domyślny',
      paragraphs: [
        '404, listingi z geo-blokiem i nagle puste siatki wariantów zwykle znaczą edycje sprzedawcy — nie sabotaż. Loguj niepowodzenia spokojnie w tooling Mulebuy zamiast potęgować panikę na czatach Mulebuy Spreadsheet.',
      ],
    },
    {
      h3: '10 · Przypomnienie końcowe',
      paragraphs: [
        'Przegląd Mulebuy Spreadsheet zmniejsza tarcie odkrywania; nie łagodzi prawa celnego, odpowiedzialności kuriera ani polityk sprzedawcy. Łącz ciekawość z dowodami — dosłownie — i przypnij żywe FAQ Mulebuy obok każdego eseju na tej domenie.',
      ],
    },
  ],
  ctaHeading: 'Otwórz żywy katalog Mulebuy Spreadsheet',
  ctaIntro: 'Kontynuuj odkrywanie przez',
  ctaIntroSuffix:
    ' — trzymaj karty katalogu w trybie browse i przejdź do Mulebuy, gdy finansujesz.',
  ctaFooterNote:
    'Linki wychodzące opuszczają tę domenę — ponownie zweryfikuj ogłoszenia, zestawy QC i wyceny frachtu samodzielnie.',
  sheetLinkLabel: 'Most przeglądu Mulebuy Spreadsheet → pas MaisonLooks Mulebuy',
  categoryPills: pillsFor({
    shoes: {
      label: 'Buty',
      alt: 'pas spreadsheet · sneakers & trainers · wybór indeksowanego katalogu',
    },
    't-shirts': {
      label: 'Koszulki',
      alt: 'pas spreadsheet · koszulki & bazy jersey · wybór indeksowanego katalogu',
    },
    pants: {
      label: 'Spodnie/Szorty',
      alt: 'pas spreadsheet · spodnie & szorty · wybór indeksowanego katalogu',
    },
    accessories: {
      label: 'Akcesoria',
      alt: 'pas spreadsheet · paski · biżuteria · drobne dodatki',
    },
    bags: {
      label: 'Torby',
      alt: 'pas spreadsheet · plecaki · messenger · codzienny nośnik',
    },
    electronics: {
      label: 'Elektronika',
      alt: 'pas spreadsheet · gadżety · peryferia · ogłoszenia o zmiennym QC',
    },
    jackets: {
      label: 'Kurtki',
      alt: 'pas spreadsheet · kurtki przeciwdeszczowe · izolacja · kubatura frachtu na uwadze',
    },
    hoodies: {
      label: 'Bluzy/Swetry',
      alt: 'pas spreadsheet · polar · crew · warstwy dzianiny',
    },
    headwear: {
      label: 'Czapki',
      alt: 'pas spreadsheet · czapki z daszkiem · beanie · kształty daszka',
    },
    jersey: {
      label: 'Jersey',
      alt: 'pas spreadsheet · jersey mesh · sylwetki sportowe',
    },
    perfume: {
      label: 'Perfumy',
      alt: 'pas spreadsheet · zapachy · kafelki beauty w katalogu',
    },
    other: {
      label: 'Inne',
      alt: 'pas spreadsheet · mieszane SKU poza głównymi kubełkami',
    },
  }),
  footer: {
    disclaimerLabel: 'Zastrzeżenie',
    disclaimerHtml: `mulebuyai.com to niezależna witryna redakcyjna o odkrywaniu w stylu <strong>Mulebuy Spreadsheet</strong>: wyjaśnienia, wejścia do katalogu i ostrzeżenia — nie checkout. Linki takie jak <a href="${mlSpreadsheetMulebuy}" target="_blank" rel="noopener noreferrer">indeksowany przegląd Spreadsheet</a>, chińskie marketplace’y i <a href="https://mulebuy.com/" target="_blank" rel="noopener noreferrer">mulebuy.com</a> to podmioty trzecie; nie przechowujemy płatności ani paczek. Zweryfikuj obrazy QC i polityki sprzedawcy samodzielnie. Nie twierdzimy o partnerstwie z Mulebuy ani powiązanymi sprzedawcami — przestrzegaj wiążących warunków każdej platformy.`,
    copyrightLine:
      '© 2026 mulebuyai.com · Tylko notatki redakcyjne — koszyki i wypłaty zostają w Mulebuy.',
  },
};
