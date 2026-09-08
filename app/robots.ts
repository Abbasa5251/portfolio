import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The contact endpoint has nothing to index and shouldn't be crawled.
        disallow: "/api/",
      },
      /* The crawlers that AI assistants use to fetch and cite pages, allowed
         by name. `*` already covers them, but this is deliberate: Cloudflare's
         "managed robots.txt" feature prepends `Disallow: /` groups for most of
         these agents to whatever this file emits, and when a crawler merges
         the two groups for its own name an explicit Allow of equal length is
         the least restrictive rule and wins (that is Google's documented tie
         break; other parsers are not guaranteed to follow it). The reliable
         fix is to switch the managed robots.txt off in the Cloudflare
         dashboard — a portfolio only benefits from being citable. */
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "anthropic-ai",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "DuckAssistBot",
          "meta-externalagent",
          "Amazonbot",
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
