"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/hero-scene";
import { SocialLinks } from "@/components/social-links";
import { marqueeItems, site } from "@/lib/site-config";

export function Hero() {
  /**
   * Each line of the hero copy rises in on load, one after the next — driven
   * by CSS, not Framer Motion.
   *
   * This block is above the fold and contains the LCP element. A JS animation
   * server-renders it at `opacity: 0`, which means the largest paint cannot
   * happen until the bundle hydrates; that measured 1825ms of "element render
   * delay" and was essentially the whole LCP. The CSS keyframe starts on the
   * first frame after the stylesheet parses, so the text paints immediately.
   *
   * The h1 and the lead paragraph — the two LCP candidates — use the
   * transform-only `rise-solid` variant, because the browser does not count a
   * paint at opacity 0 and the fade alone was costing ~1s of LCP.
   *
   * Reduced motion is handled by the global media query rather than
   * `useReducedMotion`, because that hook also only resolves after hydration.
   */
  const line = (i: number) => ({ style: { animationDelay: `${0.08 * i}s` } });

  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-cream pt-30 pb-16 md:pt-36 md:pb-24"
    >
      {/* Soft colour washes bleeding in from the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 size-120 rounded-full bg-blush blur-3xl opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-104 rounded-full bg-lavender blur-3xl opacity-70"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* ---- Copy ---------------------------------------------------- */}
        <div className="max-w-xl">
          {site.openToWork && (
            <div {...line(0)} className="mb-6 animate-rise">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-mint bg-card/80 py-1.5 pl-2.5 pr-4 text-[0.8125rem] font-semibold text-ink shadow-card">
                <span className="relative grid size-2.5 place-items-center">
                  <span className="absolute size-2.5 animate-ping rounded-full bg-live/70" />
                  <span className="size-2 rounded-full bg-live" />
                </span>
                {site.openToWorkLabel}
              </span>
            </div>
          )}

          <p
            {...line(1)}
            className="mb-3 animate-rise font-display text-lg font-semibold text-rose-ink"
          >
            Hi, I&apos;m Abbas
            <span className="ml-1.5 inline-block origin-[65%_85%] animate-wave">
              👋
            </span>
          </p>

          <h1
            {...line(2)}
            className="animate-rise-solid text-[clamp(2.5rem,7.2vw,4.25rem)] font-extrabold leading-[1.04]"
          >
            I build digital
            <br />
            products that{" "}
            <span className="underline-sketch text-rose">people love</span>
          </h1>

          <p
            {...line(3)}
            className="mt-6 animate-rise-solid text-lg leading-relaxed text-body"
          >
            I&apos;m a freelance full-stack developer in Pune, India, who turns
            ideas into fast, scalable web and mobile apps — designed carefully,
            built to last, and shipped on the date I promised.
          </p>

          <div
            {...line(4)}
            className="mt-9 flex animate-rise flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <Link href="#work">
                View My Work
                <ArrowDown className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>
            </Button>

            {site.resumeUrl && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto"
              >
                {/* Plain <a>, not next/link: a static PDF isn't an app route,
                    and Link would try to prefetch it as one. */}
                <a href={site.resumeUrl} download>
                  Download CV
                  <Download className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              </Button>
            )}
          </div>

          <div
            {...line(5)}
            className="mt-10 flex animate-rise flex-wrap items-center gap-x-5 gap-y-3"
          >
            <span className="text-sm font-semibold text-ink">
              Let&apos;s connect
            </span>
            <SocialLinks />
          </div>
        </div>

        {/* ---- Illustration -------------------------------------------- */}
        <div className="relative -mx-2 animate-zoom-in lg:mx-0">
          <HeroScene className="mx-auto w-full max-w-136 lg:max-w-none" />
        </div>
      </div>

      {/* ---- Tech marquee -------------------------------------------- */}
      <div className="relative mt-14 md:mt-20">
        <p className="mb-5 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-body">
          Tools I build with every day
        </p>
        <div
          className="relative flex overflow-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 [animation-play-state:running] hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap rounded-full border border-ink/10 bg-card/80 px-5 py-2.5 font-display text-[0.9375rem] font-semibold text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Screen readers get a plain list instead of the duplicated marquee. */}
        <p className="sr-only">Technologies: {marqueeItems.join(", ")}.</p>
      </div>

      {/* ---- Scroll hint -------------------------------------------- */}
      <div className="mt-14 flex justify-center md:mt-16">
        <Link
          href="#about"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-body transition-colors hover:text-rose-ink"
        >
          Scroll to explore
          <span className="grid size-8 place-items-center rounded-full border border-ink/12 bg-card/70 transition-transform duration-300 group-hover:translate-y-0.5">
            <ArrowRight className="size-3.5 rotate-90" />
          </span>
        </Link>
      </div>
    </section>
  );
}
