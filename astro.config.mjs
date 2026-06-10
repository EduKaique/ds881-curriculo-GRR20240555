import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://edukaique.github.io',
  base: '/ds881-curriculo-GRR20240555',
  integrations: [mdx(), tailwind()]
});