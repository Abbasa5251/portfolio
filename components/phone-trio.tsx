import Image from "next/image";

import type { PhoneScreen } from "@/lib/types";

/**
 * Three phone screens for a mobile project's work card: one upright in front,
 * two behind it fanned outwards.
 *
 * Why this exists at all: the work cards are `aspect-16/10` landscape with
 * `object-cover object-top`. A portrait phone capture is roughly 0.46:1, so
 * covering a 1.6:1 frame shows only the top ~29% of it — a status bar, a header
 * and nothing else. Rather than give mobile projects their own card shape and
 * break the grid, the trio composes to 16:10 itself and drops into the same
 * slot every screenshot uses.
 *
 * The phones are cropped by the bottom of the frame on purpose. Everything that
 * identifies a screen lives in its top two thirds, and letting them run off the
 * edge buys ~40% more scale than fitting all three whole.
 */

/**
 * Portrait aspect of a phone screen (w/h) — a 19.5:9 display.
 *
 * Applied as `aspect-ratio` so the browser derives each phone's width from the
 * height given below. Computing the width here instead would be a trap: a
 * percentage height resolves against the frame's height and a percentage width
 * against its width, and those differ by the frame's own 1.6 ratio, so the two
 * numbers silently describe different shapes.
 */
const PHONE_ASPECT = "0.462";

function Phone({
  screen,
  className,
  style,
}: {
  screen: PhoneScreen;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      /* `navy` and not `ink`: ink is the theme's text colour and inverts to
         near-white in dark mode, which would turn every bezel white. navy is a
         panel token that stays dark in both themes — a phone is an object, not
         type, so its casing should not follow the text palette. */
      className={`absolute overflow-hidden bg-navy shadow-[0_18px_40px_-12px_rgb(22_32_92/0.45)] ${className}`}
    >
      {/* Percentage radii, with the vertical value scaled by the phone's own
          aspect so the corners stay circular rather than stretching into
          ellipses as the card resizes. */}
      <div className="relative size-full overflow-hidden rounded-[11%/5.1%] bg-card">
        <Image
          src={screen.src}
          /* Decorative individually — the group below carries one alt for all
             three, so screen readers hear one description, not three. */
          alt=""
          fill
          sizes="(min-width: 1024px) 9rem, (min-width: 768px) 15vw, 30vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function PhoneTrio({
  screens,
  appName,
  className = "",
}: {
  /** Exactly three, ordered left → centre → right. */
  screens: [PhoneScreen, PhoneScreen, PhoneScreen];
  /** Used to build the group's accessible name. */
  appName: string;
  className?: string;
}) {
  const [left, centre, right] = screens;

  /* Only heights are given; width follows from PHONE_ASPECT. The side pair sit
     lower and smaller so the centre reads as the subject rather than as one of
     three equals. */
  const sideStyle = { height: "100%", top: "17%", aspectRatio: PHONE_ASPECT };
  const midStyle = { height: "116%", top: "5%", aspectRatio: PHONE_ASPECT };

  return (
    <div
      role="img"
      aria-label={`${appName} on a phone — ${screens.map((s) => s.label).join(", ")}`}
      className={`relative aspect-16/10 w-full ${className}`}
    >
      <Phone
        screen={left}
        /* Negative rotation tips the top away from centre. On hover the pair
           splay a further 3°, which reads as the group opening up rather than
           the whole card zooming — the flat screenshots already do that. */
        className="rounded-[12.5%/5.8%] p-[1.6%] transition-transform duration-500 ease-out-soft group-hover:-rotate-13"
        style={{ ...sideStyle, left: "4%", transform: "rotate(-10deg)" }}
      />

      <Phone
        screen={right}
        className="rounded-[12.5%/5.8%] p-[1.6%] transition-transform duration-500 ease-out-soft group-hover:rotate-13"
        style={{ ...sideStyle, right: "4%", transform: "rotate(10deg)" }}
      />

      {/* Last in the DOM so it stacks in front without needing a z-index. */}
      <Phone
        screen={centre}
        className="rounded-[12%/5.5%] p-[1.5%] transition-transform duration-500 ease-out-soft group-hover:-translate-y-1.5"
        style={{ ...midStyle, left: "50%", transform: "translateX(-50%)" }}
      />
    </div>
  );
}
