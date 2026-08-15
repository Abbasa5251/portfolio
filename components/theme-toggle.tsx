"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Light/dark switch.
 *
 * Which icon shows is decided by CSS from the `.dark` class on <html>, not by
 * React state. That matters: the class is already stamped by next-themes'
 * pre-paint script, so the correct icon is right on the very first frame, with
 * no hydration mismatch and no "wait until mounted" placeholder popping in.
 *
 * The two icons are stacked in one grid cell and cross-rotate, so the button
 * never changes size and nothing around it shifts.
 */
export function ThemeToggle({
  className,
  onNavy = false,
}: {
  className?: string;
  onNavy?: boolean;
}) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "group grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border-2 transition-colors",
        onNavy
          ? "border-white/15 bg-white/8 text-on-navy hover:border-white/35 hover:text-white"
          : "border-ink/12 bg-card/70 text-ink hover:border-ink/30 hover:bg-card",
        className
      )}
    >
      <span className="grid [grid-template-areas:'icon']">
        <Sun
          aria-hidden="true"
          className="size-5 [grid-area:icon] rotate-0 scale-100 opacity-100 transition-all duration-300 ease-[var(--ease-spring)] group-hover:rotate-45 dark:-rotate-90 dark:scale-50 dark:opacity-0"
        />
        <Moon
          aria-hidden="true"
          className="size-5 [grid-area:icon] rotate-90 scale-50 opacity-0 transition-all duration-300 ease-[var(--ease-spring)] group-hover:dark:-rotate-12 dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
      </span>

      {/* The accessible name has to describe the action, and the action flips
          with the theme — so both strings ship and CSS reveals the right one. */}
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>
    </button>
  );
}
