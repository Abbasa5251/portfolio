import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { visibleTestimonials, type Testimonial } from "@/lib/site-config";

const TONE: Record<Testimonial["tone"], string> = {
  blush: "bg-blush",
  lavender: "bg-lavender",
  mint: "bg-mint",
};

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="grain relative overflow-hidden bg-card py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind words"
          title="What clients"
          accent="say"
          align="center"
          description="The part of my job I enjoy most is the message that arrives after launch."
        />

        <Stagger
          className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3"
          gap={0.12}
        >
          {visibleTestimonials.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <figure
                className={`group flex h-full flex-col rounded-card p-7 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-lift ${TONE[item.tone]}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <Quote
                    className="size-8 rotate-180 text-rose/35 transition-colors duration-300 group-hover:text-rose/60"
                    aria-hidden="true"
                  />
                  {/* `role="img"` is required for aria-label to be valid on a
                      generic container — five loose <svg>s otherwise announce
                      as nothing at all. */}
                  <div
                    role="img"
                    aria-label="Rated 5 out of 5"
                    className="flex gap-0.5"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-star text-star"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="flex-1 text-[1.0625rem] leading-relaxed text-ink-soft">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-cream"
                    >
                      {initialsOf(item.name)}
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[0.9375rem] font-bold text-ink">
                      {item.name}
                    </span>
                    <span className="block truncate text-sm text-body">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
