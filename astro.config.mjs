import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import icon from "astro-icon";
import config from "./src/config/config.json";
import { manifest } from "./src/lib/utils/manifest";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://confide-it.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@shortcodes/Button",
        "@shortcodes/Accordion",
        "@shortcodes/Notice",
        "@shortcodes/Video",
        "@shortcodes/Youtube",
        "@shortcodes/Skills",
      ],
    }),
    mdx(),
    icon(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        maximumFileSizeToCacheInBytes: 4000000,
        globDirectory: "dist",
        globPatterns: [
          "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
        ],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
