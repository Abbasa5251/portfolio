"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navItems, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SECTION_IDS = navItems
  .map((item) => item.href.replace("#", ""))
  .filter(Boolean);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("top");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the nav item for whichever section owns the middle of the
     viewport. Cheaper and smoother than recomputing offsets on every scroll. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Escape closes the sheet. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-soft",
        /* An open sheet needs the bar solid too, or the two read as
           disconnected panels floating over the hero. */
        menuOpen
          ? "bg-cream"
          : scrolled
            ? "surface-glass border-b border-ink/[0.07] shadow-[0_4px_20px_-8px_rgb(22_32_92/0.12)]"
            : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        {/* ---- Desktop nav ------------------------------------------- */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative block rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
                      isActive ? "text-ink" : "text-body hover:text-ink",
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId={reduced ? undefined : "nav-underline"}
                        className="absolute inset-x-3.5 -bottom-0.5 h-[2.5px] rounded-full bg-rose"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Kept visible at every width — the logo collapses to its tile
              below `sm`, which leaves room, and hiding the only CTA on mobile
              costs conversions. */}
          <Button asChild size="default" className="group px-4 sm:px-5">
            <Link href="#contact">
              Let&apos;s Talk
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-11 cursor-pointer place-items-center rounded-xl border-2 border-ink/12 bg-white/70 text-ink transition-colors hover:border-ink/30 hover:bg-white lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* ---- Mobile sheet -------------------------------------------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            /* Solid rather than frosted: a translucent panel let the hero type
               show straight through and the menu became unreadable. */
            className="border-b border-ink/[0.07] bg-cream shadow-[0_18px_40px_-16px_rgb(22_32_92/0.25)] lg:hidden"
          >
            <nav aria-label="Mobile" className="px-5 pb-6 pt-2 sm:px-8">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex min-h-12 items-center rounded-xl px-4 font-display text-lg font-semibold transition-colors",
                        active === item.href.replace("#", "")
                          ? "bg-blush text-ink"
                          : "text-ink/80 hover:bg-ink/5 hover:text-ink",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-2.5">
                <Button asChild size="lg">
                  <Link href="#contact" onClick={() => setMenuOpen(false)}>
                    Let&apos;s Talk
                    <ArrowRight />
                  </Link>
                </Button>
                <p className="pt-1 text-center text-sm">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-rose-ink underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
