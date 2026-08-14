import { projects } from "@/lib/data";
import { services, site, socials, youtubeChannel } from "@/lib/site-config";

/**
 * JSON-LD for the home page.
 *
 * Emitted as a single `@graph` so the entities can cross-reference each other
 * by `@id` instead of repeating the same Person three times. This is what
 * populates knowledge-panel style results and what AI assistants read when
 * asked "who can build me a Next.js app" — it states the services, the areas
 * served and the price band in a form that doesn't rely on parsing prose.
 */

const PERSON_ID = `${site.siteUrl}/#person`;
const SITE_ID = `${site.siteUrl}/#website`;
const BUSINESS_ID = `${site.siteUrl}/#business`;

function sameAs() {
  return [
    socials.github,
    socials.linkedin,
    socials.youtube,
    socials.twitter,
    socials.instagram,
  ].filter((url): url is string => Boolean(url));
}

export function homePageSchema() {
  const [city, region, country] = site.location
    .split(",")
    .map((part) => part.trim());

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.name,
        jobTitle: site.role,
        description: `Freelance full-stack developer building web and mobile products with React, Next.js, Node and Python. Runs the ${youtubeChannel.name} YouTube channel.`,
        url: site.siteUrl,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        image: `${site.siteUrl}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: city,
          addressRegion: region,
          addressCountry: country ?? "India",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "Django",
          "React Native",
          "PostgreSQL",
          "REST API design",
          "Web accessibility",
          "Web performance",
        ],
        sameAs: sameAs(),
      },

      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: site.siteUrl,
        name: `${site.name} — ${site.role}`,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },

      /* ProfessionalService is what makes the offering legible as a business
         you can hire, rather than just a personal page. */
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: `${site.name} — Freelance Development`,
        description:
          "Freelance web and mobile app development: fixed scopes, weekly demos on a live link, and documented handover.",
        url: site.siteUrl,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        founder: { "@id": PERSON_ID },
        image: `${site.siteUrl}/opengraph-image`,
        priceRange: "₹₹",
        areaServed: {
          "@type": "Place",
          name: "Worldwide (remote)",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: city,
          addressRegion: region,
          addressCountry: country ?? "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Development services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              serviceType: service.title,
              provider: { "@id": PERSON_ID },
            },
          })),
        },
      },

      /* Each shipped project as a CreativeWork, so the portfolio items are
         machine-readable rather than just decorative cards. */
      {
        "@type": "ItemList",
        name: "Selected work",
        itemListElement: projects.map((project, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.description,
            applicationCategory: project.category,
            url: project.liveUrl || project.githubUrl,
            image: `${site.siteUrl}${project.image}`,
            author: { "@id": PERSON_ID },
            offers: {
              "@type": "Offer",
              price: 0,
              priceCurrency: "USD",
            },
          },
        })),
      },
    ],
  };
}
