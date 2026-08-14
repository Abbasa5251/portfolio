import Image from "next/image";
import Link from "next/link";
import { Play, Users } from "lucide-react";

import { YoutubeIcon } from "@/components/brand-icons";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { youtubeVideos } from "@/lib/data";
import { youtubeChannel } from "@/lib/site-config";

export function YouTube() {
  return (
    <section
      id="youtube"
      className="grain relative overflow-hidden bg-mint py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="On YouTube"
          title="Teaching on"
          accent={youtubeChannel.name}
          description="I teach the same stack I build client work with. If you'd like to see how I think and explain things before hiring me, start here."
        />

        <Reveal delay={0.12} className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
              <Users className="size-4 text-rose-ink" aria-hidden="true" />
              {youtubeChannel.subscribers} subscribers
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
              <Play className="size-4 text-rose-ink" aria-hidden="true" />
              {youtubeChannel.videoCount} tutorials
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
              <YoutubeIcon className="size-4 text-[#FF0000]" />
              {youtubeChannel.handle}
            </span>
          </div>
        </Reveal>

        <Stagger
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          gap={0.12}
        >
          {youtubeVideos.map((video) => (
            <StaggerItem key={video.id} className="h-full">
              <Link
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition-all duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative aspect-video overflow-hidden bg-navy">
                  {/* i.ytimg.com is allow-listed in next.config.ts, so these get
                      resized and re-encoded as AVIF/WebP like a local image.
                      Decorative — the card heading already names the video. */}
                  <Image
                    src={video.thumbnail}
                    alt=""
                    width={480}
                    height={270}
                    loading="lazy"
                    sizes="(min-width: 1024px) 26rem, (min-width: 768px) 45vw, 90vw"
                    className="size-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-navy/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full bg-rose text-white opacity-0 shadow-rose transition-all duration-300 ease-spring group-hover:scale-100 group-hover:opacity-100"
                  >
                    <Play className="size-6 translate-x-px fill-current" />
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 rounded-md bg-navy/85 px-2 py-0.5 font-mono text-xs font-semibold text-white">
                    {video.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-rose-ink">
                    {video.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 flex-1 text-[0.9375rem] leading-relaxed text-body">
                    {video.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-body">
                    {video.views}
                    <span className="sr-only">
                      {" "}
                      — watch on YouTube (opens in a new tab)
                    </span>
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="navy" className="group">
            <Link
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className="transition-transform duration-200 group-hover:scale-110" />
              Subscribe for more
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
