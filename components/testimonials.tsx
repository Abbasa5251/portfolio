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

/**
 * The grid tracks how many quotes there are instead of always being three
 * columns. One testimonial in a 3-col grid renders as a third-width card
 * marooned on the left, which reads as "two are missing" rather than "here is
 * the one we have". Centred and capped, it reads as deliberate.
 */
const LAYOUT: Record<number, string> = {
  1: "max-w-2xl",
  2: "max-w-4xl md:grid-cols-2",
};

/**
 * Five positions, the first `value` of them filled. Showing only the earned
 * stars would leave "4" with no denominator to read it against.
 *
 * Empty stars are an outline in a body-text colour rather than a faded amber:
 * they carry the rating just as much as the filled ones do, so they have to
 * clear 3:1 against the card (SC 1.4.11), and a tint of the fill never will.
 */
function StarRating({ value }: { value: number }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < value ? "size-4 fill-star text-star" : "size-4 text-ink-soft"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

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
          className={`mx-auto mt-14 grid gap-6 md:mt-16 ${
            LAYOUT[visibleTestimonials.length] ?? "md:grid-cols-3"
          }`}
          gap={0.12}
        >
          {visibleTestimonials.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <figure
                className={`group flex h-full flex-col rounded-card p-7 transition-all duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-lift ${TONE[item.tone]}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <Quote
                    className="size-8 rotate-180 text-rose/35 transition-colors duration-300 group-hover:text-rose/60"
                    aria-hidden="true"
                  />
                  {/* Only when the client actually gave a score — see the note
                      on `rating` in site-config.

                      `role="img"` is required for aria-label to be valid on a
                      generic container; five loose <svg>s otherwise announce as
                      nothing at all. */}
                  {item.rating && <StarRating value={item.rating} />}
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
                      className="grid size-11 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white"
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
