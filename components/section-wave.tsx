import { cn } from "@/lib/utils";
import type { Tone } from "@/lib/types";

type Band = Tone | "cream" | "white";

/** Background colour of the band above the wave. */
const BG: Record<Band, string> = {
  cream: "bg-cream",
  white: "bg-card",
  blush: "bg-blush",
  lavender: "bg-lavender",
  mint: "bg-mint",
  butter: "bg-butter",
  peach: "bg-peach",
};

/** Fill colour of the wave itself — i.e. the band below. */
const FILL: Record<Band, string> = {
  cream: "text-cream",
  white: "text-card",
  blush: "text-blush",
  lavender: "text-lavender",
  mint: "text-mint",
  butter: "text-butter",
  peach: "text-peach",
};

/**
 * Three hand-drawn wave silhouettes. Rotating between them keeps consecutive
 * dividers from reading as a repeating pattern.
 */
const PATHS = [
  "M0,64 C180,110 360,10 540,28 C720,46 900,120 1080,104 C1260,88 1380,34 1440,18 L1440,120 L0,120 Z",
  "M0,20 C160,4 320,52 480,68 C660,86 820,40 1000,26 C1180,12 1340,58 1440,78 L1440,120 L0,120 Z",
  "M0,88 C140,52 300,96 460,86 C640,74 780,18 960,22 C1140,26 1300,74 1440,52 L1440,120 L0,120 Z",
] as const;

/**
 * Organic divider between two coloured bands.
 *
 * `from` must match the background of the section above and `to` the section
 * below, otherwise a hard seam appears. Purely decorative, so it is hidden
 * from assistive tech.
 */
export function SectionWave({
  from,
  to,
  variant = 0,
  className,
}: {
  from: Band;
  to: Band;
  variant?: 0 | 1 | 2;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative -mt-px leading-0", BG[from], className)}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        role="presentation"
        className={cn("block h-[52px] w-full md:h-[92px]", FILL[to])}
      >
        <path d={PATHS[variant]} fill="currentColor" />
      </svg>
    </div>
  );
}
