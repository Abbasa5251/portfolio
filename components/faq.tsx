import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { faqs } from "@/lib/site-config";

/**
 * The objections a prospect has before they fill in the form, answered in
 * plain prose. Always-visible cards rather than an accordion: a `<details>`
 * that opens on click hides the answer from a screenshot, and an answer that
 * needs a click is one an AI crawler or a skimming client may never reach.
 *
 * The same `faqs` array is emitted as FAQPage JSON-LD in lib/structured-data,
 * so the visible text and the structured data cannot drift apart.
 */
export function Faq() {
  return (
    <section
      id="faq"
      className="grain relative overflow-hidden bg-peach py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Good to know"
          title="Questions clients"
          accent="ask first"
          description="Straight answers to the things people want settled before they get in touch — the same answers you'd get on the discovery call."
        />

        <Stagger
          className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2"
          gap={0.08}
        >
          {faqs.map((faq) => (
            <StaggerItem key={faq.question} className="h-full">
              <article className="h-full rounded-card border border-card bg-card/80 p-6 shadow-card transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:bg-card hover:shadow-lift md:p-7">
                <h3 className="font-display text-lg font-bold leading-snug text-ink md:text-xl">
                  {faq.question}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                  {faq.answer}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
