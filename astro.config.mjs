import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Must match `site` — used for sitemap URLs. */
const site = 'https://mulebuyai.com';

export default defineConfig({
  site,
  integrations: [
    sitemap({
      /** Ensure trailing-slash URLs for routes that need explicit inclusion (must stay crawlable). */
      customPages: [
        new URL('/news/openstar-recruit/', site).href,
        new URL('/promotions/mulebuy-may-2026/', site).href,
      ],
    }),
  ],
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'pt', 'es', 'fr', 'it', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  /**
   * Dev on **4789** on purpose: avoids colliding with another local Astro hub commonly run on **4788**.
   */
  server: {
    port: 4789,
    host: true,
    open: '/',
    headers: {
      'Cache-Control': 'no-store',
    },
  },
});
