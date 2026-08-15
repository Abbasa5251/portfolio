"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

/** Toasts styled with the site's own tokens, following the active theme. */
const Toaster = ({ ...props }: ToasterProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--surface)",
          "--normal-text": "var(--fg-strong)",
          "--normal-border": "var(--line)",
          "--success-bg": "var(--band-green)",
          "--success-text": "var(--accent-green-fg)",
          "--success-border": "var(--accent-green)",
          "--error-bg": "var(--accent-rose-wash)",
          "--error-text": "var(--accent-rose-ink)",
          "--error-border": "var(--accent-rose-soft)",
          "--border-radius": "0.9rem",
          fontFamily: "var(--font-sans)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "shadow-lift",
          title: "font-display font-bold",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
