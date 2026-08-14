import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { navItems, services, site, youtubeChannel } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-navy text-on-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-white/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 size-80 rounded-full bg-rose/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* ---- Brand ------------------------------------------------- */}
          <div>
            <Logo onNavy />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed">
              Building web and mobile products that are fast, accessible and
              genuinely pleasant to use — one project at a time.
            </p>
            <div className="mt-6">
              <SocialLinks onNavy />
            </div>
          </div>

          {/* ---- Quick links ------------------------------------------- */}
          <nav aria-labelledby="footer-nav-heading">
            <h2
              id="footer-nav-heading"
              className="font-display text-sm font-bold uppercase tracking-widest text-white"
            >
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Services ---------------------------------------------- */}
          <nav aria-labelledby="footer-services-heading">
            <h2
              id="footer-services-heading"
              className="font-display text-sm font-bold uppercase tracking-widest text-white"
            >
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Contact ----------------------------------------------- */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.9375rem]">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-rose-soft"
                  aria-hidden="true"
                />
                <Link
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {site.email}
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-rose-soft"
                  aria-hidden="true"
                />
                <Link
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-rose-soft"
                  aria-hidden="true"
                />
                <span>{site.location}</span>
              </li>
            </ul>

            <Link
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              {youtubeChannel.name}
              <span className="text-rose-soft">{youtubeChannel.handle}</span>
            </Link>
          </div>
        </div>

        {/* ---- Bottom bar --------------------------------------------- */}
        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm sm:text-left">
            © {year} {site.name}. Built with <span aria-hidden>💙</span>
            <span className="sr-only">love</span> by {youtubeChannel.name}.
          </p>

          <Link
            href="#top"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
