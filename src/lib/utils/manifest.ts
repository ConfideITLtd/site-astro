import type { ManifestOptions } from 'vite-plugin-pwa'

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "Basi Software Limited", // Change this to your website's name.
  short_name: "Basi Software", // Change this to your website's short name.
  description:
    "Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to your websites description.
  theme_color: "#30E130", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
}
