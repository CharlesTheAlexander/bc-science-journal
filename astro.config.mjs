// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages project site until the school domain exists. When it does: set site to the
  // domain, delete base, and update public/robots.txt.
  site: 'https://charlesthealexander.github.io',
  base: '/bc-science-journal',
  integrations: [mdx(), sitemap({ filter: (page) => !page.endsWith('/search/') && !page.endsWith('/404/') })],
  vite: { plugins: [tailwindcss()] },
  // Self-hosted variable fonts (src/fonts, OFL). Google's provider drops the
  // optical-size axis, and Newsreader's display cut is the whole point.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: ['./src/fonts/Newsreader.woff2'], weight: '200 800', style: 'normal' },
          { src: ['./src/fonts/Newsreader-Italic.woff2'], weight: '200 800', style: 'italic' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Public Sans',
      cssVariable: '--font-public',
      fallbacks: ['system-ui', 'sans-serif'],
      options: { variants: [{ src: ['./src/fonts/PublicSans.woff2'], weight: '100 900', style: 'normal' }] },
    },
  ],
});
