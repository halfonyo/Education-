// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // דומיין פרטי ב-Cloudflare Pages. האתר מוגש מהשורש, לכן אין base.
  site: 'https://caesareastory.co.il',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // מאפשר עיבוד תמונות מקומיות דרך astro:assets
    responsiveStyles: true,
  },
});
