// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// עדכן את הכתובת לדומיין הסופי כשיהיה
export default defineConfig({
  // כתובת האתר ב-GitHub Pages. כשיהיה דומיין משלך — עדכן כאן והסר את base.
  site: 'https://halfonyo.github.io',
  base: '/Education-',
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
