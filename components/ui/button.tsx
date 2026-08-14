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
        /** Primary conversion action — white on rose clears AA at 4.70:1. */
        primary:
          "bg-rose text-white shadow-[var(--shadow-rose)] hover:-translate-y-0.5 hover:bg-rose-ink hover:shadow-[0_12px_32px_-6px_rgb(225_29_72/0.5)] active:translate-y-0",
        /** Secondary action — deep navy, 12.97:1 with white. */
        navy: "bg-navy-btn text-white shadow-[var(--shadow-navy)] hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_12px_32px_-6px_rgb(17_26_71/0.42)] active:translate-y-0",
        /** Tertiary — outlined, sits on any pastel band. */
        outline:
          "border-2 border-ink/15 bg-white/70 text-ink hover:-translate-y-0.5 hover:border-ink/35 hover:bg-white hover:shadow-card active:translate-y-0",
        /** For the dark navy contact card and footer. */
        onNavy:
          "bg-white text-ink hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_12px_32px_-6px_rgb(0_0_0/0.35)] active:translate-y-0",
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
