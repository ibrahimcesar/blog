import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import { SITE } from "./src/config.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      wrap: true
    }
  },
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.domain,

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image(),
  ],
});
