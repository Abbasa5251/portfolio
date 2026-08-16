"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/ui/reveal";
import { HighFive } from "@/components/high-five";
import { SocialLinks } from "@/components/social-links";
import { services, site } from "@/lib/site-config";

const BUDGETS = [
  "Under ₹50k",
  "₹50k – ₹1.5L",
  "₹1.5L – ₹4L",
  "₹4L+",
  "Not sure yet",
];

const EMPTY = { name: "", email: "", service: "", budget: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);

  const update =
    (field: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent — thank you!", {
          description: "I read every enquiry myself and reply within a day.",
        });
        setForm(EMPTY);
      } else {
        toast.error("That didn't go through", {
          description: data.error ?? `You can email me at ${site.email}.`,
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("That didn't go through", {
        description: `Check your connection, or email me at ${site.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  const details = [
    {
      Icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      Icon: Phone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      Icon: MapPin,
      label: "Based in",
      value: site.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-cream py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-3">Let&apos;s talk</p>
            <h2 className="text-[clamp(2rem,4.8vw,3.25rem)] font-extrabold leading-[1.08]">
              Have an idea? Let&apos;s build{" "}
              <span className="underline-sketch text-rose">
                something great
              </span>{" "}
              together
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Tell me what you&apos;re trying to build. You&apos;ll get a real
              reply from me — usually within a day — with honest thoughts on
              scope, timeline and cost.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] md:mt-16">
          {/* ---- Details card ------------------------------------------ */}
          <Reveal direction="right" className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-card bg-navy p-7 text-on-navy shadow-lift md:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/5"
              />

              <HighFive className="relative mx-auto w-52 max-w-full" />

              <h3 className="relative mt-4 font-display text-2xl font-bold text-white">
                Get in touch directly
              </h3>
              <p className="relative mt-2 text-[0.9375rem] leading-relaxed">
                {site.availability}. Currently working from{" "}
                {site.location.split(",").slice(-1)[0].trim()}.
              </p>

              <ul className="relative mt-7 space-y-4">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-rose-soft">
                      <Icon className="size-[1.1rem]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-on-navy/70">
                        {label}
                      </span>
                      {href ? (
                        <Link
                          href={href}
                          className="block wrap-break-word font-medium text-white underline-offset-4 hover:underline"
                        >
                          {value}
                        </Link>
                      ) : (
                        <span className="block wrap-break-word font-medium text-white">
                          {value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {site.bookingUrl && (
                <div className="relative mt-7">
                  <Button asChild variant="onNavy" size="lg" className="w-full">
                    <Link
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarCheck />
                      Book a free 30-min call
                    </Link>
                  </Button>
                </div>
              )}

              <div className="relative mt-auto pt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-on-navy/70">
                  Elsewhere
                </p>
                <SocialLinks onNavy />
              </div>
            </div>
          </Reveal>

          {/* ---- Form -------------------------------------------------- */}
          <Reveal direction="left" delay={0.08} className="h-full">
            <div className="h-full rounded-card border border-ink/6 bg-card p-7 shadow-card md:p-9">
              <h3 className="font-display text-2xl font-bold">
                Start a project
              </h3>
              <p className="mt-1.5 text-[0.9375rem] text-body">
                Fields marked{" "}
                <span className="font-semibold text-rose-ink">*</span> are
                required.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Your name <span className="text-rose-ink">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={update("name")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email address <span className="text-rose-ink">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">What do you need?</Label>
                    <Select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={update("service")}
                    >
                      <option value="">Choose a service…</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Rough budget</Label>
                    <Select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={update("budget")}
                    >
                      <option value="">Prefer not to say</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Tell me about it <span className="text-rose-ink">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you building, who is it for, and when do you need it live?"
                    value={form.message}
                    onChange={update("message")}
                    aria-describedby="message-hint"
                    required
                  />
                  <p id="message-hint" className="text-sm text-body">
                    A couple of sentences is plenty to get started.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="group w-full"
                >
                  {sending ? (
                    <>
                      <span
                        aria-hidden
                        className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send message
                    </>
                  )}
                </Button>

                {/* Politely announces the sending state to screen readers. */}
                <p aria-live="polite" className="sr-only">
                  {sending ? "Sending your message" : ""}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
