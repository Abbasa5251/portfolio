import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Monitor,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { services, type Service } from "@/lib/site-config";

const ICONS: Record<Service["icon"], LucideIcon> = {
  monitor: Monitor,
  server: Server,
  smartphone: Smartphone,
  gauge: Gauge,
};

/** Icon tile + top accent bar per service, keyed by tone. */
const TONE: Record<Service["tone"], { tile: string; bar: string }> = {
  lavender: { tile: "bg-lavender-deep text-ink", bar: "bg-[#8B7CF6]" },
  blush: { tile: "bg-rose-wash text-rose-ink", bar: "bg-rose" },
  butter: { tile: "bg-butter text-[#854D0E]", bar: "bg-[#EAB308]" },
  mint: { tile: "bg-mint text-[#166534]", bar: "bg-[#22C55E]" },
};

export function Services() {
  return (
    <section id="services" className="grain relative overflow-hidden bg-lavender py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I do"
          title="Services I"
          accent="provide"
          description="I help founders and small teams ship digital products — from the first wireframe through to the deploy and the months after it. Pick the piece you need, or hand me the whole thing."
        />

        <Stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16"
          gap={0.09}
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            const tone = TONE[service.tone];

            return (
              <StaggerItem key={service.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-card bg-white p-6 shadow-card transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-lift">
                  {/* Accent bar wipes across on hover */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-x-100 ${tone.bar}`}
                  />

                  <span
                    className={`mb-5 grid size-13 place-items-center rounded-2xl transition-transform duration-300 ease-[var(--ease-spring)] group-hover:-rotate-6 group-hover:scale-110 ${tone.tile}`}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>

                  {/* Two lines reserved so every card's body copy starts on
                      the same baseline, whatever the title length. */}
                  <h3 className="font-display text-xl font-bold leading-snug lg:min-h-[2lh]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-body">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-cream-deep px-2.5 py-1 text-xs font-semibold text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-rose-ink transition-colors hover:text-rose"
                  >
                    Start a project
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                    <span className="sr-only">— {service.title}</span>
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
