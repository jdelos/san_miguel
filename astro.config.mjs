import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [mdx(), sitemap(), icon(), react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'lodash': 'lodash-es'
      }
    },
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro', 'lodash-es']
    },
    optimizeDeps: {
      include: ['lodash-es']
    }
  },
});
