import type { NextConfig } from "next";

/* ---------------------------------------------------------------------------
   Content-Security-Policy

   Deliberately uses 'unsafe-inline' for scripts rather than a nonce. Next
   injects nonces only while server-rendering a request, so a nonce-based
   policy would force every page into dynamic rendering and throw away the
   static prerender this site currently serves from the CDN edge.

   The value that remains is the part that matters against a compromise: an
   injected `<script src="https://evil.example/x.js">` is refused outright,
   because scripts may only be loaded from this origin. Nothing here can stop
   an injected *inline* script, so this is defence in depth, not a substitute
   for keeping dependencies patched.

   Everything the page needs is first-party: next/font self-hosts the three
   Google fonts at build time, and YouTube thumbnails are re-served through
   `/_next/image` rather than fetched from i.ytimg.com by the browser. The
   remote entry below is only a fallback for an unoptimised image.

   The one third-party exception is Cloudflare Web Analytics. Cloudflare
   injects its beacon into every HTML response at the edge, and until Sept
   2026 this policy silently refused it — so the site had analytics switched
   on in the dashboard, a CSP error in every console, and no data. The beacon
   host and the endpoint it reports to are allowed by name; the privacy page
   describes what it collects (cookieless, aggregate page views).
--------------------------------------------------------------------------- */

/* React calls eval() in development to rebuild callstacks that crossed the
   server/client boundary, so a policy without 'unsafe-eval' breaks `next dev`
   with "eval() is not supported in this environment". React never evals in a
   production build, so the allowance is scoped to dev and the deployed policy
   stays strict. */
const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com",
  "font-src 'self' data:",
  /* The contact form posts to /api/contact, the router prefetches its own RSC
     payloads, and the analytics beacon reports to cloudflareinsights.com. */
  "connect-src 'self' https://cloudflareinsights.com",
  /* The page embeds nothing and must not be embedded — clickjacking a contact
     form is exactly the "trick visitors into sharing personal info" pattern. */
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  /* The form may only submit back to this origin, so an injected `action`
     cannot exfiltrate an enquiry to someone else. */
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Applied to every route. These are the headers a Safe Browsing or security
 * reviewer looks for, and each one closes a real hole rather than decorating
 * the response.
 */
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  /* Stop a browser second-guessing a declared Content-Type and executing an
     upload or API response as script. */
  { key: "X-Content-Type-Options", value: "nosniff" },
  /* Belt-and-braces alongside frame-ancestors, for anything that still only
     understands the older header. */
  { key: "X-Frame-Options", value: "DENY" },
  /* Send the full URL within this site, only the origin when leaving it, and
     nothing at all when downgrading to http. */
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  /* A portfolio has no business asking for any of these. */
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  /* Two years, subdomains included, and eligible for the preload list. */
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  /* Severs the window.opener relationship, so a page opened from here cannot
     reach back and navigate this one. */
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // YouTube video thumbnails rendered in the tutorials section.
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    // The site never renders an image wider than the 1280px content column at
    // 2x, so generating 3840w variants only wastes optimisation time.
    deviceSizes: [384, 640, 828, 1080, 1280, 1920],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
