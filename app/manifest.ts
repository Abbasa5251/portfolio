import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

/**
 * Replaces the generated boilerplate manifest, which still said "MyWebSite"
 * and used a white theme colour that flashed against the cream page.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.brand,
    description:
      "Freelance full-stack developer building fast, accessible web and mobile products.",
    start_url: "/",
    display: "standalone",
    theme_color: "#fff8f2",
    background_color: "#fff8f2",
    lang: "en",
    categories: ["business", "productivity", "developer"],
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
