"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

/** Toasts styled with the site's own tokens. The site ships light-only. */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
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
          "--normal-bg": "#ffffff",
          "--normal-text": "var(--color-ink)",
          "--normal-border": "var(--color-border)",
          "--success-bg": "var(--color-mint)",
          "--success-text": "#14532d",
          "--success-border": "#b6e6c6",
          "--error-bg": "var(--color-rose-wash)",
          "--error-text": "var(--color-rose-ink)",
          "--error-border": "#f9c3d3",
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
