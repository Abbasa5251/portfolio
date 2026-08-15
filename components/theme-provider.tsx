"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * next-themes injects a tiny blocking script before paint that reads the stored
 * choice (or the OS preference) and stamps `class="dark"` on <html>. Without it
 * a dark-mode visitor gets a full-brightness flash on every navigation, which
 * on a cream-coloured page is genuinely unpleasant.
 *
 * `defaultTheme="system"` means a first-time visitor gets whatever their OS is
 * set to; the choice is only persisted once they actually use the toggle.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      /* Suppresses transitions for one frame while swapping themes — without it
         every colour token animates at once and the switch looks like a smear. */
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
