import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { YouTube } from "@/components/youtube";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SectionWave } from "@/components/section-wave";
import { visibleTestimonials } from "@/lib/site-config";

/**
 * Section order is a deliberate funnel:
 *   who I am → what I sell → proof I can do it → how it'll go →
 *   social proof → a way to judge me for free → objections answered → the ask.
 *
 * Each section owns a pastel band, joined by wave dividers. The `from` colour
 * on every wave must match the band above it and `to` the band below.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <SectionWave from="cream" to="blush" variant={0} />

        <About />
        <SectionWave from="blush" to="lavender" variant={1} />

        <Services />
        <SectionWave from="lavender" to="cream" variant={2} />

        <Work />
        <SectionWave from="cream" to="butter" variant={1} />

        <Process />

        {/* The section and the two waves that frame it appear together, so the
            butter→mint transition stays seamless when there are no quotes. */}
        {visibleTestimonials.length > 0 ? (
          <>
            <SectionWave from="butter" to="white" variant={2} />
            <Testimonials />
            <SectionWave from="white" to="mint" variant={0} />
          </>
        ) : (
          <SectionWave from="butter" to="mint" variant={2} />
        )}

        <YouTube />
        <SectionWave from="mint" to="peach" variant={1} />

        {/* Plain-prose answers to the questions a prospect has before they
            fill in the form. Also the page's most extractable passages for
            AI search — see the note on `faqs` in site-config. */}
        <Faq />
        <SectionWave from="peach" to="cream" variant={2} />

        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
