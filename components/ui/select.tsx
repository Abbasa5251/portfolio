import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Native `<select>` styled to match the inputs.
 *
 * Deliberately native rather than a custom listbox: it inherits correct
 * keyboard behaviour, and on mobile it opens the platform picker, which is far
 * easier to use than a scrolling div.
 */
function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          "h-12 w-full cursor-pointer appearance-none rounded-xl border-2 border-input bg-field pl-4 pr-11 text-base text-ink",
          "outline-none transition-colors duration-200",
          "hover:border-ink/20",
          "focus-visible:border-rose focus-visible:bg-card focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-55",
          "aria-invalid:border-destructive",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-body"
      />
    </div>
  );
}

export { Select };
