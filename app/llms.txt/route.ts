import { projects, youtubeVideos } from "@/lib/data";
import {
  faqs,
  processSteps,
  services,
  site,
  socials,
  visibleTestimonials,
  youtubeChannel,
} from "@/lib/site-config";

/**
 * /llms.txt — the site in plain Markdown for AI assistants (llmstxt.org).
 *
 * ChatGPT, Claude and Perplexity read this file when it exists, and it hands
 * them the whole portfolio in one request with no rendering, no scroll reveals
 * and no marquee duplication to wade through. Google says it needs nothing of
 * the sort, and it costs Google nothing either.
 *
 * Every line is derived from site-config and data, so it can never say
 * something the page does not. Add a section here whenever a real section is
 * added to the page.
 */

/* No request data is read, so prerender it with the rest of the site instead
   of running a function per fetch. */
export const dynamic = "force-static";

function line(...parts: (string | null | undefined | false)[]) {
  return parts.filter(Boolean).join("");
}

function buildDocument() {
  const out: string[] = [];

  out.push(`# ${site.name} — Freelance ${site.role}`);
  out.push("");
  out.push(`> ${site.summary}`);
  out.push("");
  out.push(`- Website: ${site.siteUrl}`);
  out.push(`- Location: ${site.location} (${site.availability.toLowerCase()})`);
  out.push(`- Status: ${site.openToWork ? site.openToWorkLabel : "Not taking new work at the moment"}`);
  out.push(`- Last updated: ${site.contentUpdatedAt}`);
  out.push("");

  out.push("## Services");
  out.push("");
  for (const s of services) {
    out.push(`- **${s.title}**: ${s.description} Deliverables: ${s.deliverables.join(", ")}.`);
  }
  out.push("");

  out.push("## How a project runs");
  out.push("");
  processSteps.forEach((step, i) => {
    out.push(`${i + 1}. **${step.title}** — ${step.description}`);
  });
  out.push("");

  out.push("## Selected work");
  out.push("");
  for (const p of projects) {
    const url = p.liveUrl || p.githubUrl;
    const name = url ? `[${p.title}](${url})` : p.title;
    out.push(line(`- ${name} (${p.category}): ${p.description} Built with ${p.tech.join(", ")}.`));
  }
  out.push("");

  if (visibleTestimonials.length > 0) {
    out.push("## What clients say");
    out.push("");
    for (const t of visibleTestimonials) {
      out.push(`> "${t.quote}"`);
      out.push(`> — ${t.name}, ${t.role}`);
      out.push("");
    }
  }

  out.push("## Frequently asked questions");
  out.push("");
  for (const f of faqs) {
    out.push(`### ${f.question}`);
    out.push("");
    out.push(f.answer);
    out.push("");
  }

  out.push(`## Teaching: ${youtubeChannel.name}`);
  out.push("");
  out.push(
    `${site.name} runs the [${youtubeChannel.name}](${youtubeChannel.url}) YouTube channel (${youtubeChannel.handle}), teaching Python, Django and web development to beginners. Recent videos:`,
  );
  out.push("");
  for (const v of youtubeVideos) {
    out.push(`- [${v.title}](${v.url}) (${v.duration}): ${v.description}`);
  }
  out.push("");

  out.push("## Contact");
  out.push("");
  out.push(`- Email: ${site.email}`);
  out.push(`- Phone: ${site.phone}`);
  out.push(`- Contact form: ${site.siteUrl}/#contact`);
  out.push(`- Privacy policy: ${site.siteUrl}/privacy`);
  out.push("");

  out.push("## Profiles");
  out.push("");
  out.push(`- GitHub: ${socials.github}`);
  out.push(`- LinkedIn: ${socials.linkedin}`);
  out.push(`- YouTube: ${socials.youtube}`);
  if (socials.twitter) out.push(`- X / Twitter: ${socials.twitter}`);
  if (socials.instagram) out.push(`- Instagram: ${socials.instagram}`);
  out.push("");

  return out.join("\n");
}

export function GET() {
  return new Response(buildDocument(), {
    headers: {
      /* text/plain rather than text/markdown so every browser displays it
         inline instead of offering a download. */
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
