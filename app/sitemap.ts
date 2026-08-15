import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

/**
 * Search engines index URLs, not `#fragments`, so a single-page site has
 * exactly one sitemap entry. Add a row here for every real route you create
 * later (case studies, service pages, blog posts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.siteUrl,
      /* From site-config, not `new Date()` — see the note there. A lastmod that
         moves on every deploy is a signal search engines learn to ignore. */
      lastModified: new Date(site.contentUpdatedAt),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
