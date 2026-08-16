import Image from "next/image";
import Link from "next/link";
import { Award, Coffee, Layers, Users, type LucideIcon } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Button } from "@/components/ui/button";
import headshot from "@/public/abbas-headshot.webp";
import { stats, youtubeChannel } from "@/lib/site-config";

const STAT_ICONS: LucideIcon[] = [Award, Layers, Users, Coffee];

const TILE: Record<string, string> = {
  rose: "bg-rose-wash text-rose-ink",
  lavender: "bg-lavender-deep text-ink",
  mint: "bg-mint text-on-mint",
  butter: "bg-butter text-on-butter",
};

export function About() {
  return (
    <section
      id="about"
      className="grain relative overflow-hidden bg-blush py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ---- Portrait ---------------------------------------------- */}
          <Reveal direction="right" className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Tilted panel peeking out from behind the photo — offset so it
                  reads as a deliberate layer rather than a rendering slip. */}
              <div
                aria-hidden
                className="absolute -inset-3 -rotate-3 rounded-[4rem_1.75rem_4rem_1.75rem] bg-lavender-deep"
              />
              <div
                aria-hidden
                className="absolute -right-5 -top-5 size-24 animate-float rounded-full bg-butter"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 -left-6 size-16 animate-float-slow rounded-full bg-mint"
              />

              <Image
                src={headshot}
                alt="Abbas Anandwala, freelance full-stack developer, at his desk"
                /* Deliberately not `priority` — this sits below the fold, so
                   preloading it would compete with the hero for bandwidth and
                   push out the real LCP element. */
                loading="lazy"
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="relative w-full rounded-[4rem_1.75rem_4rem_1.75rem] object-cover shadow-lift"
              />

              {/* Floating credential card */}
              <div className="absolute -bottom-7 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-ink/8 bg-card/95 px-5 py-3 shadow-lift backdrop-blur">
                <p className="font-display text-sm font-bold text-ink">
                  {youtubeChannel.name}
                </p>
                <p className="text-xs font-medium text-body">
                  {youtubeChannel.subscribers} developers taught on YouTube
                </p>
              </div>
            </div>
          </Reveal>

          {/* ---- Copy -------------------------------------------------- */}
          <div className="order-1 lg:order-2">
            <Reveal direction="left">
              <p className="eyebrow mb-3">About me</p>
              <h2 className="text-[clamp(2rem,4.6vw,3rem)] font-extrabold leading-[1.1]">
                Building apps with{" "}
                <span className="underline-sketch text-rose">purpose</span>
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  I&apos;m Abbas — a full-stack developer who has spent the last
                  few years turning rough ideas into products people actually
                  use. I work across the whole stack, so you get one person
                  accountable for the interface, the API and the deploy.
                </p>
                <p>
                  Most of my clients come to me with the same two worries: will
                  it be finished on time, and will I be able to maintain it
                  afterwards. I answer both with fixed scopes, weekly demos on a
                  live link, and code that comes with documentation.
                </p>
                <p>
                  Off the clock I run{" "}
                  <Link
                    href={youtubeChannel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-rose-ink underline decoration-rose-soft decoration-2 underline-offset-4 hover:decoration-rose"
                  >
                    {youtubeChannel.name}
                  </Link>
                  , where I teach the same practices I use on client work —
                  which keeps me honest about explaining things simply.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.18}>
              <div className="mt-8">
                <Button asChild variant="navy" size="lg" className="group">
                  <Link href="#services">
                    See how I can help
                    <Award className="transition-transform duration-200 group-hover:scale-110" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---- Stats strip -------------------------------------------- */}
        <Stagger
          className="mt-20 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4 md:gap-6"
          gap={0.1}
        >
          {stats.map((stat, i) => {
            const Icon = STAT_ICONS[i] ?? Award;
            return (
              <StaggerItem key={stat.label}>
                <div className="group h-full rounded-card border border-card bg-card/70 p-5 text-center shadow-card transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:bg-card hover:shadow-lift md:p-6">
                  <span
                    className={`mx-auto mb-4 grid size-12 place-items-center rounded-2xl transition-transform duration-300 ease-spring group-hover:-rotate-6 group-hover:scale-110 ${
                      TILE[stat.tone] ?? TILE.rose
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                    {"display" in stat && stat.display ? (
                      stat.display
                    ) : (
                      <CountUp value={stat.value ?? 0} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-sm font-medium text-body">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
