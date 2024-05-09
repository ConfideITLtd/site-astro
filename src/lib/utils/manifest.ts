import type { ManifestOptions } from "vite-plugin-pwa";

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "Confide IT Ltd", // Change this to your website's name.
  short_name: "Confide IT", // Change this to your website's short name.
  description:
    "Confide IT are web development specialists within the government and public sector", // Change this to your websites description.
  theme_color: "#30E130", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
