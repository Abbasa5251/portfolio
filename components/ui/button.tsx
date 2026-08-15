import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap",
    "rounded-xl font-semibold tracking-[-0.01em]",
    "transition-all duration-200 ease-[var(--ease-out-soft)]",
    "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-rose",
    "disabled:pointer-events-none disabled:opacity-55",
    "[&_svg]:size-[1.05em] [&_svg]:shrink-0 [&_svg]:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        /**
         * The fill is `rose-solid`, which is deliberately the same #E11D48 in
         * both themes — the button is its own surface, so white-on-rose keeps
         * its measured 4.70:1 either way. Using the themable `rose` here would
         * turn the fill pale pink in dark mode and drop the label to ~1.5:1.
         */
        primary:
          "bg-rose-solid text-white shadow-[var(--shadow-rose)] hover:-translate-y-0.5 hover:bg-rose-ink-solid hover:shadow-[0_12px_32px_-6px_rgb(225_29_72/0.5)] active:translate-y-0",
        /** Secondary action — deep navy, 9.97:1+ with white in both themes. */
        navy: "bg-navy-btn text-white shadow-[var(--shadow-navy)] hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_12px_32px_-6px_rgb(17_26_71/0.42)] active:translate-y-0",
        /** Tertiary — outlined, sits on any band. */
        outline:
          "border-2 border-ink/15 bg-card/70 text-ink hover:-translate-y-0.5 hover:border-ink/35 hover:bg-card hover:shadow-card active:translate-y-0",
        /**
         * Sits on the navy contact card / footer, which stay dark in both
         * themes — so this stays a genuinely white button, not a themed surface.
         */
        onNavy:
          "bg-white text-navy hover:-translate-y-0.5 hover:bg-[#f2f0ff] hover:shadow-[0_12px_32px_-6px_rgb(0_0_0/0.35)] active:translate-y-0",
      },
      size: {
        /* 44px minimum height throughout — comfortable tap target. */
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-11 px-4 text-sm",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
