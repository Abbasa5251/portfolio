import Link from "next/link";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Wordmark: a navy tile carrying the initials with a rose full-stop, then the
 * name and role stacked beside it. The text block hides below `sm` so only the
 * tile remains — the header stays legible at 320px.
 */
export function Logo({
  href = "#top",
  onNavy = false,
  className,
}: {
  href?: string;
  onNavy?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid size-11 place-items-center rounded-[0.9rem] font-display text-[1.0625rem] font-extrabold leading-none tracking-tight transition-transform duration-300 ease-spring group-hover:-rotate-6 group-hover:scale-105",
          onNavy ? "bg-white text-navy" : "bg-navy text-cream",
        )}
      >
        <span>
          {site.initials}
          <span className="text-rose-soft">.</span>
        </span>
      </span>

      <span className="hidden flex-col leading-tight sm:flex">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-bold tracking-[-0.015em]",
            onNavy ? "text-white" : "text-ink",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "text-[0.75rem] font-medium",
            onNavy ? "text-on-navy" : "text-body",
          )}
        >
          {site.role}
        </span>
      </span>

      {/* Below `sm` the name and role are hidden and the tile is decorative, so
          the link would have no accessible name — this supplies one. An
          `aria-label` on the <a> instead would override the visible text and
          trip the label/content mismatch rule on wider screens. */}
      <span className="sr-only sm:hidden">{site.name} — home</span>
    </Link>
  );
}
