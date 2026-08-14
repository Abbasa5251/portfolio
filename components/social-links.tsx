import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { site, socials } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Entry = { label: string; href: string; Icon: LucideIcon };

/** Only links with a URL in site-config are rendered. */
function entries(): Entry[] {
  const list: Entry[] = [
    { label: "GitHub", href: socials.github, Icon: Github },
    { label: "LinkedIn", href: socials.linkedin, Icon: Linkedin },
    { label: "YouTube", href: socials.youtube, Icon: Youtube },
  ];
  if (socials.twitter)
    list.push({ label: "X / Twitter", href: socials.twitter, Icon: Twitter });
  if (socials.instagram)
    list.push({ label: "Instagram", href: socials.instagram, Icon: Instagram });
  list.push({ label: "Email", href: `mailto:${site.email}`, Icon: Mail });
  return list;
}

/**
 * Row of social icon buttons. Every button is 44×44 and carries a visible-text
 * label for screen readers — icon-only links without one are unusable with AT.
 */
export function SocialLinks({
  onNavy = false,
  className,
}: {
  onNavy?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {entries().map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <Link
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cn(
                "grid size-11 place-items-center rounded-xl border transition-all duration-200 ease-[var(--ease-out-soft)] hover:-translate-y-0.5",
                onNavy
                  ? "border-white/15 bg-white/8 text-on-navy hover:border-white/35 hover:bg-white/15 hover:text-white"
                  : "border-ink/10 bg-white/80 text-ink-soft hover:border-rose/40 hover:bg-white hover:text-rose-ink hover:shadow-card"
              )}
            >
              <Icon className="size-[1.15rem]" aria-hidden="true" />
              <span className="sr-only">
                {label}
                {external ? " (opens in a new tab)" : ""}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
