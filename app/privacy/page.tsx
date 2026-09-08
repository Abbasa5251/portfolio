import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { site } from "@/lib/site-config";

/**
 * A real privacy policy is not decoration here. The contact form asks visitors
 * for a name, an email and project details, and a site that collects personal
 * information without saying what happens to it is exactly the pattern Google
 * Safe Browsing classifies as "tries to trick visitors into sharing personal
 * info". Everything below must stay true to what the code actually does — see
 * app/api/contact/route.ts. If the form or hosting changes, change this page in
 * the same commit.
 */

/** Bump whenever the wording below changes materially. */
const UPDATED = "8 September 2026";

const title = "Privacy Policy";
const description =
  "What the contact form on adevtutorials.in collects, where it goes, how long it is kept, and how to have it deleted.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: `${site.siteUrl}/privacy` },
};

/** Shared shell so every section below reads at the same rhythm. */
function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-bold tracking-[-0.01em] text-ink sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-[1.0625rem] leading-relaxed text-body">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* A legal page gets its own slim chrome. The main site nav is a set of
          `#section` links that only resolve on the home page, so reusing it
          here would hand the reader a row of dead links. */}
      <header className="border-b border-ink/[0.07] bg-cream">
        <div className="mx-auto flex h-18 max-w-3xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo href="/" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/10 px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/25 hover:bg-ink/4"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose-ink">
            Legal
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-body">
            This site is the portfolio of {site.name}, a freelance developer
            based in {site.location}. It is a single page with one contact form
            and no advertising, no tracking cookies and no profiling of any
            kind; the only measurement is an anonymous, cookieless page-view
            count, described below. This page explains, in plain language, the
            only place where personal information changes hands.
          </p>
          <p className="mt-3 text-sm text-body">Last updated: {UPDATED}</p>

          <Section heading="What the contact form collects">
            <p>
              The form in the “Let&apos;s work together” section asks for four
              things. Your <strong className="text-ink">name</strong> and{" "}
              <strong className="text-ink">email address</strong> are required,
              because I cannot reply without them. The{" "}
              <strong className="text-ink">service</strong> you are interested
              in and a <strong className="text-ink">rough budget</strong> are
              optional dropdowns — “Prefer not to say” is a valid answer and the
              form submits fine without them. The{" "}
              <strong className="text-ink">message</strong> is whatever you
              choose to write.
            </p>
            <p>
              That is the complete list. The form never asks for a password, a
              payment card, a bank account, a government ID or any other
              credential, and it never will. If any page claiming to be this
              site ever asks you for one, it is not this site — please{" "}
              <Link
                href={`mailto:${site.email}`}
                className="font-medium text-rose-ink underline underline-offset-4 hover:no-underline"
              >
                tell me
              </Link>
              .
            </p>
          </Section>

          <Section heading="Where it goes and how long it is kept">
            <p>
              When you press “Send message”, the details are posted to this
              site&apos;s own server, which forwards them as a text message to a
              private Telegram chat that only I can read. That is the entire
              journey.
            </p>
            <p>
              There is no database behind this website and no mailing list. Your
              enquiry is not stored on the site&apos;s servers, and it is never
              sold, rented, published or shared with anyone. It sits in my
              Telegram history and, if we start emailing, in my inbox — kept
              only as long as it is useful for our conversation, and deleted on
              request.
            </p>
          </Section>

          <Section heading="Cookies and tracking">
            <p>
              This site sets no tracking cookies and runs no advertising or
              fingerprinting scripts. There is no Google Analytics, no
              advertising pixel and no third-party session recorder.
            </p>
            <p>
              The one measurement tool is Cloudflare Web Analytics, a
              privacy-first counter added by the host. It records that a page
              was viewed, roughly where in the world the request came from, the
              browser family and the referring site — as aggregate totals, with
              no cookie, no persistent identifier and no attempt to recognise
              you across visits or across other websites. It tells me how many
              people read the page; it cannot tell me who.
            </p>
            <p>
              The one thing stored in your browser is your light or dark theme
              choice, saved in your own browser&apos;s local storage so the site
              does not flash the wrong theme on your next visit. It never leaves
              your device, and clearing your browser data removes it.
            </p>
          </Section>

          <Section heading="Third parties">
            <p>
              The page is hosted on Vercel and served through Cloudflare. Like
              every web host, they process technical request data such as your
              IP address and browser user-agent in order to deliver the page and
              block abuse. Fonts and project images are served from this domain
              rather than fetched from a third party, so simply reading the page
              does not report your visit to anyone else.
            </p>
            <p>
              Links to GitHub, LinkedIn, YouTube and client websites are
              ordinary outbound links. Once you follow one, that site&apos;s own
              privacy policy applies — not this one.
            </p>
          </Section>

          <Section heading="Your choices">
            <p>
              You can read every word of this site without submitting anything.
              If you have sent an enquiry and want it deleted, or want to know
              what I still hold, email{" "}
              <Link
                href={`mailto:${site.email}`}
                className="font-medium text-rose-ink underline underline-offset-4 hover:no-underline"
              >
                {site.email}
              </Link>{" "}
              and I will confirm once it is done. No account, no form and no
              justification needed.
            </p>
          </Section>

          <Section heading="Contact">
            <p>This site is run by one person, not a company. Reaching me:</p>
            <ul className="mt-4 space-y-3 not-italic">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-1 size-4 shrink-0 text-rose-ink"
                  aria-hidden="true"
                />
                <Link
                  href={`mailto:${site.email}`}
                  className="break-all font-medium text-ink underline underline-offset-4 hover:no-underline"
                >
                  {site.email}
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-1 size-4 shrink-0 text-rose-ink"
                  aria-hidden="true"
                />
                <Link
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="font-medium text-ink underline underline-offset-4 hover:no-underline"
                >
                  {site.phone}
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-rose-ink"
                  aria-hidden="true"
                />
                <span className="font-medium text-ink">{site.location}</span>
              </li>
            </ul>
          </Section>
        </div>
      </main>

      <footer className="bg-navy text-on-navy">
        <div className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <Link
            href="/"
            className="font-semibold text-white underline-offset-4 hover:underline"
          >
            adevtutorials.in
          </Link>
        </div>
      </footer>
    </>
  );
}
