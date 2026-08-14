import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GithubIcon } from "@/components/brand-icons";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { socials } from "@/lib/site-config";
import type { Tone } from "@/lib/types";

/** Wash behind each screenshot. */
const WASH: Record<Tone, string> = {
  blush: "bg-blush-deep",
  lavender: "bg-lavender-deep",
  mint: "bg-mint",
  butter: "bg-butter",
  peach: "bg-peach",
};

export function Work() {
  return (
    <section id="work" className="grain relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My work"
          title="Selected"
          accent="work"
          description="A few things I've built end to end — interface, API and infrastructure. Each one shipped, deployed and open-sourced."
        />

        <Stagger
          className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
          gap={0.12}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-lift">
                {/* ---- Screenshot on a tinted stage ------------------- */}
                <div
                  className={`relative overflow-hidden px-6 pt-7 ${WASH[project.tone]}`}
                >
                  <div className="overflow-hidden rounded-t-xl shadow-[0_-2px_20px_-6px_rgb(22_32_92/0.25)] ring-1 ring-ink/8">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={800}
                      height={500}
                      /* All three cards are far below the fold. */
                      loading="lazy"
                      sizes="(min-width: 1024px) 26rem, (min-width: 768px) 45vw, 90vw"
                      className="aspect-16/10 w-full object-cover object-top transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* ---- Body ------------------------------------------- */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.09em] text-rose-ink">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-bold leading-snug transition-colors group-hover:text-rose-ink">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-body">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-cream-deep px-2.5 py-1 text-xs font-semibold text-ink-soft"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.liveUrl ? (
                      <Button asChild size="sm" className="group/btn">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live demo
                          <ArrowUpRight className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          <span className="sr-only">
                            {" "}
                            for {project.title} (opens in a new tab)
                          </span>
                        </Link>
                      </Button>
                    ) : (
                      <span className="rounded-xl bg-cream-deep px-3.5 py-2.5 text-xs font-semibold text-body">
                        Source only
                      </span>
                    )}

                    <Button asChild size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                        Code
                        <span className="sr-only">
                          {" "}
                          for {project.title} (opens in a new tab)
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button asChild variant="navy" size="lg" className="group">
            <Link
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              See all projects on GitHub
              <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
