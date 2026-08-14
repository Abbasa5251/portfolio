"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Two hands meeting in a high five, with an impact burst — the "let's work
 * together" moment from the reference. Flat, stylised, hand-authored SVG.
 *
 * On load the hands swing in from either side and the burst pops on contact.
 * Decorative only.
 */

/** One arm, drawn pointing up-and-right from the origin. */
function Arm({
  sleeve,
  cuff,
  skin,
}: {
  sleeve: string;
  cuff: string;
  skin: string;
}) {
  return (
    <g>
      {/* Sleeve runs off the bottom of the frame */}
      <rect x="-70" y="4" width="176" height="56" rx="18" fill={sleeve} />
      <rect x="94" y="0" width="18" height="64" rx="9" fill={cuff} />
      {/* Palm */}
      <path
        d="M112,22 a16,16 0 0 1 16,-18 h28 a13,13 0 0 1 13,13 v38 a13,13 0 0 1 -13,13 h-28 a16,16 0 0 1 -16,-18 z"
        fill={skin}
      />
      {/* Finger separations */}
      <g stroke="#00000022" strokeWidth="2.5" strokeLinecap="round">
        <path d="M169,18 h-15" />
        <path d="M169,32 h-15" />
        <path d="M169,46 h-15" />
      </g>
    </g>
  );
}

export function HighFive({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  const swing = (from: number, delay: number) =>
    reduced
      ? {}
      : {
          initial: { x: from, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.34, 1.56, 0.64, 1] as const,
          },
        };

  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 320 250" role="presentation" className="h-auto w-full">
        {/* Left arm */}
        <motion.g {...swing(-70, 0)}>
          <g transform="translate(0,184) rotate(-30)">
            <Arm sleeve="#86EFAC" cuff="#4DAE5C" skin="#E8B08A" />
          </g>
        </motion.g>

        {/* Right arm — the same drawing mirrored about the centre line */}
        <motion.g {...swing(70, 0.08)}>
          <g transform="translate(320,0) scale(-1,1)">
            <g transform="translate(0,184) rotate(-30)">
              <Arm sleeve="#FF8FAB" cuff="#E11D48" skin="#F2C6A0" />
            </g>
          </g>
        </motion.g>

        {/* Impact burst */}
        <motion.g
          initial={reduced ? undefined : { scale: 0, opacity: 0 }}
          whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.4,
            delay: 0.55,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          style={{ transformOrigin: "160px 66px", transformBox: "view-box" }}
          stroke="#FDE68A"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M160,50 v-26" />
          <path d="M126,60 l-19,-18" />
          <path d="M194,60 l19,-18" />
          <path d="M108,86 l-25,-8" />
          <path d="M212,86 l25,-8" />
        </motion.g>

        {/* Sparkles — position on the wrapper <g>, animate the inner <path>,
            so the keyframe's transform can't clobber the placement. */}
        <g fill="#FFFFFF" opacity="0.9">
          {(
            [
              [56, 74, 0.9, "0s"],
              [262, 92, 1.1, "1.2s"],
              [160, 146, 0.7, "2.1s"],
            ] as const
          ).map(([x, y, s, delay]) => (
            <g key={`${x}-${y}`} transform={`translate(${x},${y}) scale(${s})`}>
              <path
                d="M0,-9 C1.4,-2.9 2.9,-1.4 9,0 C2.9,1.4 1.4,2.9 0,9 C-1.4,2.9 -2.9,1.4 -9,0 C-2.9,-1.4 -1.4,-2.9 0,-9 Z"
                className={reduced ? undefined : "animate-sparkle"}
                style={{
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animationDelay: delay,
                }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
