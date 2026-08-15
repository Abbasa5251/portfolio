/**
 * Single source of truth for every piece of personal / business information on
 * the site. Nothing below is hardcoded anywhere else — edit this one file and
 * the whole portfolio updates.
 *
 * Values tagged `NEEDS CONFIRMATION` were carried over from the previous
 * version of the site. Search this file for that phrase to find them all.
 */

export const site = {
  name: "Abbas Anandwala",
  /** Short mark used by the header/footer logo. */
  initials: "AA",
  /** Wordmark shown next to the logo. */
  brand: "Abbas.dev",
  role: "Full-Stack Developer & Content Creator",
  email: "hello@adevtutorials.in",
  phone: "+91 77769 46904",
  location: "Baramati, Pune, India",
  availability: "Available for remote work worldwide",

  /** Shown as a live pill in the hero. Set to false when you're booked out. */
  openToWork: true,
  openToWorkLabel: "Available for freelance work",

  /**
   * ⚠️  Currently null so the hero's "Download CV" button stays hidden — the
   * file doesn't exist yet, and a 404 on your own CV reads badly to a client.
   * Drop a PDF at `public/abbas-anandwala-cv.pdf`, then set this back to
   * "/abbas-anandwala-cv.pdf" and the button reappears.
   */
  resumeUrl: null as string | null,

  /**
   * Calendly / Cal.com link for the "Book a call" buttons. Set to null and the
   * buttons fall back to scrolling to the contact form instead.
   */
  bookingUrl: null as string | null,

  /**
   * MUST match the host that actually serves the page, because it feeds every
   * canonical, og:url, sitemap entry and JSON-LD @id. Vercel now serves the
   * bare apex directly and 307s `www` to it (verified live), so the apex is
   * canonical. If the primary domain is ever changed back in Vercel, change
   * this in the same pass — a mismatch points every SEO signal at a redirect.
   */
  siteUrl: "https://adevtutorials.in",

  /**
   * Feeds <lastmod> in the sitemap. Deliberately a fixed date rather than
   * `new Date()`: a lastmod that says "now" on every build tells search engines
   * the page changed when it did not, and they learn to discount the signal.
   * Bump this when the page content actually changes.
   */
  contentUpdatedAt: "2026-08-15",
} as const;

export const socials = {
  github: "https://github.com/Abbasa5251",
  linkedin: "https://www.linkedin.com/in/abbasanandwala/",
  youtube: "https://www.youtube.com/@adevtutorials",
  /** Set to a URL to show the icon, or leave null to hide it. */
  twitter: null as string | null,
  instagram: null as string | null,
} as const;

export const youtubeChannel = {
  name: "ADev Tutorials",
  handle: "@adevtutorials",
  url: socials.youtube,
  /** NEEDS CONFIRMATION — carried over from the previous site. */
  subscribers: "70+",
  /** NEEDS CONFIRMATION — carried over from the previous site. */
  videoCount: "10+",
} as const;

/** The credibility strip under the About section. */
export const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years experience",
    tone: "rose",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects delivered",
    tone: "lavender",
  },
  {
    value: 12,
    suffix: "+",
    label: "Happy clients",
    tone: "mint",
  },
  {
    value: null,
    display: "∞",
    suffix: "",
    label: "Cups of coffee",
    tone: "butter",
  },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "monitor" | "server" | "smartphone" | "gauge";
  deliverables: string[];
  tone: "lavender" | "blush" | "butter" | "mint";
};

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Web App Development",
    description:
      "Fast, accessible web apps built with React and Next.js — from a marketing site that converts to a full customer dashboard.",
    icon: "monitor",
    deliverables: [
      "Next.js / React",
      "TypeScript",
      "Responsive UI",
      "SEO ready",
    ],
    tone: "lavender",
  },
  {
    id: "backend",
    title: "Backend & API Engineering",
    description:
      "Reliable APIs, auth, payments and database design that hold up under real traffic — documented so your team can own it.",
    icon: "server",
    deliverables: ["Node.js / Django", "REST APIs", "PostgreSQL", "Auth"],
    tone: "blush",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "One cross-platform codebase shipped to both the App Store and Play Store, with native feel and offline support.",
    icon: "smartphone",
    deliverables: ["React Native", "Flutter", "Expo", "Store release"],
    tone: "butter",
  },
  {
    id: "optimise",
    title: "Performance & Maintenance",
    description:
      "Inherited a slow or fragile codebase? I audit it, fix what's breaking, cut load times and keep it healthy month to month.",
    icon: "gauge",
    deliverables: ["Core Web Vitals", "Refactors", "CI/CD", "Monitoring"],
    tone: "mint",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "A free 30-minute call to understand the problem, your users and what success looks like. No pitch deck.",
  },
  {
    step: "02",
    title: "Scope & fixed quote",
    description:
      "You get a written plan: what ships, in what order, by when, for how much. No open-ended hourly surprises.",
  },
  {
    step: "03",
    title: "Build in the open",
    description:
      "Weekly demos on a live staging link. You see progress as it happens and can steer before anything is set in stone.",
  },
  {
    step: "04",
    title: "Launch & aftercare",
    description:
      "I handle deployment, handover docs and 30 days of post-launch support so nothing is left dangling.",
  },
] as const;

/**
 * Off until there are real quotes to show. The entries below are generic
 * templates, not testimonials — shipping them as though a client said them
 * would be inventing praise, and a visitor who spots it stops trusting
 * everything else on the page.
 *
 * To turn the section on: replace all three `testimonials` entries with genuine
 * quotes (with the client's permission) and flip this to `true`. The section and
 * its two wave dividers appear and disappear together — see app/page.tsx.
 */
export const showTestimonials = false;

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  /** Optional path to an avatar in /public. Falls back to initials. */
  avatar?: string;
  tone: "blush" | "lavender" | "mint";
};

/**
 * Templates, not quotes. When you ask a past client for one, the useful prompt
 * is "what were you worried about before we started, and what happened?" — a
 * quote naming a concrete outcome converts far better than general praise.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "",
    name: "",
    role: "",
    tone: "blush",
  },
  {
    id: 2,
    quote: "",
    name: "",
    role: "",
    tone: "lavender",
  },
  {
    id: 3,
    quote: "",
    name: "",
    role: "",
    tone: "mint",
  },
];

/**
 * What actually renders. Deriving this rather than reading `showTestimonials`
 * directly means the flag and the data can't disagree: turn the flag on with
 * only one real quote and you get one card, not one card and two blanks.
 */
export const visibleTestimonials = showTestimonials
  ? testimonials.filter((t) => t.quote.trim() !== "" && t.name.trim() !== "")
  : [];

/** Logos/labels for the trust marquee under the hero. */
export const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Django",
  "React Native",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Figma",
] as const;

export const navItems = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
] as const;
