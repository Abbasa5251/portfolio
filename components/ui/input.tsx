import * as React from "react";

import { cn } from "@/lib/utils";

/** 48px tall — comfortably above the 44px minimum tap target. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-xl border-2 border-input bg-field px-4 text-base text-ink",
        "placeholder:text-body/60 selection:bg-rose-wash selection:text-ink",
        "outline-none transition-colors duration-200",
        "hover:border-ink/20",
        "focus-visible:border-rose focus-visible:bg-card focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-55",
        "aria-invalid:border-destructive aria-invalid:bg-rose-wash/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
