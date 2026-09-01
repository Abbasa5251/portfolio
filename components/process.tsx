import {
  Compass,
  FileText,
  PenTool,
  Ship,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { processSteps } from "@/lib/site-config";

const ICONS: LucideIcon[] = [Compass, FileText, PenTool, Ship];

export function Process() {
  return (
    <section
      id="process"
      className="grain relative overflow-hidden bg-butter py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we'll work"
          title="No surprises, just a"
          accent="clear plan"
          description="Hiring a developer you've never met is a risk. This is exactly how a project runs with me, so you know what happens after you hit send."
        />

        <Stagger
          className="relative mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4"
          gap={0.11}
        >
          {/* Connector threading the four steps together on desktop.
              26px is the vertical centre of the 52px icon tiles. */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-6.5 hidden border-t-2 border-dashed border-ink/15 lg:block"
          />

          {processSteps.map((step, i) => {
            const Icon = ICONS[i] ?? Compass;
            return (
              <StaggerItem key={step.step} className="h-full">
                <div className="group relative flex h-full flex-col">
                  <span className="relative z-10 grid size-13 place-items-center rounded-2xl bg-navy text-white shadow-navy transition-transform duration-300 ease-spring group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>

                  <p className="mt-5 font-mono text-sm font-bold text-rose-ink">
                    {step.step}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-body">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
