import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * The repeating section header from the reference: a small rose eyebrow, a
 * two-tone display heading, and an optional supporting paragraph set beside it
 * on wide screens.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "split",
  className,
}: {
  eyebrow: string;
  title: string;
  /** Rendered after the title with a sketched underline. */
  accent?: string;
  description?: ReactNode;
  /** `split` = heading left, description right. `center` = stacked. */
  align?: "split" | "center";
  className?: string;
}) {
  const heading = (
    <h2 className="text-[clamp(2rem,4.6vw,3rem)] font-extrabold leading-[1.1]">
      {title}
      {accent && (
        <>
          {" "}
          <span className="underline-sketch text-rose">{accent}</span>
        </>
      )}
    </h2>
  );

  if (align === "center") {
    return (
      <div className={cn("mx-auto max-w-2xl text-center", className)}>
        <Reveal>
          <p className="eyebrow mb-3">{eyebrow}</p>
          {heading}
        </Reveal>
        {description && (
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-body">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:items-end md:gap-12",
        className
      )}
    >
      <Reveal>
        <p className="eyebrow mb-3">{eyebrow}</p>
        {heading}
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-body md:pb-2">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
