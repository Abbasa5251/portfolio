import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full rounded-xl border-2 border-input bg-field px-4 py-3 text-base leading-relaxed text-ink",
        "placeholder:text-body/60 selection:bg-rose-wash selection:text-ink",
        "resize-y outline-none transition-colors duration-200",
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

export { Textarea };
