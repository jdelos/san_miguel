import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  output: "server",
  adapter: netlify(),
  integrations: [mdx(), sitemap(), icon(), react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        lodash: "lodash-es",
      },
    },
    ssr: {
      noExternal: ["@keystatic/core", "@keystatic/astro", "lodash-es"],
    },
    optimizeDeps: {
      include: ["lodash-es"],
    },
    server: { 
      port: 4321,
      allowedHosts: [".ngrok-free.app"] },
    build: {
      minify: false,
      target: "esnext",
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === "THIS_IS_UNDEFINED") return;
          warn(warning);
        },
      },
    },
  },
});
