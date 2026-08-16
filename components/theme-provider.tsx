"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import type { ReactNode } from "react";

/** Must match --band-base in globals.css for each theme. */
const THEME_COLOR = { light: "#fff8f2", dark: "#14121f" } as const;

/**
 * Keeps <meta name="theme-color"> in step with the theme actually being shown.
 *
 * The static tag in layout.tsx can only vary on `prefers-color-scheme`, and the
 * site no longer follows the OS — light is the default for everyone. Without
 * this, someone on a dark OS would get the light page wrapped in dark browser
 * chrome, and anyone toggling to dark would keep cream chrome.
 */
function ThemeColorSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const color = THEME_COLOR[resolvedTheme === "dark" ? "dark" : "light"];
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((tag) => tag.setAttribute("content", color));
  }, [resolvedTheme]);

  return null;
}

/**
 * next-themes injects a tiny blocking script before paint that stamps the theme
 * class on <html>. Without it a dark-mode visitor gets a full-brightness flash
 * on every navigation, which on a cream page is genuinely unpleasant.
 *
 * Light is the default for every first-time visitor regardless of their OS, and
 * `enableSystem` is off to match — the toggle offers light and dark only, so
 * leaving "system" in the rotation would let the theme change out from under
 * someone when their OS flips at sunset. Once they use the toggle, their choice
 * is stored and wins from then on.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      /* Suppresses transitions for one frame while swapping themes — without it
         every colour token animates at once and the switch looks like a smear. */
      disableTransitionOnChange
    >
      <ThemeColorSync />
      {children}
    </NextThemeProvider>
  );
}
