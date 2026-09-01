import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

/**
 * Search engines index URLs, not `#fragments`, so the marketing side of this
 * site has exactly one sitemap entry. Add a row here for every real route you
 * create later (case studies, service pages, blog posts).
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
    {
      /* Listed on purpose rather than left to be discovered. A crawler — and a
         Safe Browsing reviewer — should be able to find the privacy policy
         without having to scroll the home page to the footer. */
      url: `${site.siteUrl}/privacy`,
      lastModified: new Date(site.contentUpdatedAt),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
