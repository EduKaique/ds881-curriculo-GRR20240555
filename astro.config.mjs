import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://EduKaique.github.io",
  // base: '/ds881-curriculo-GRR20240555',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  },
  integrations: [mdx(), tailwind()],
});
