"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The illustrated hero scene: a laptop whose code types itself in, a floating
 * phone, a `</>` speech bubble, a mug, a plant and drifting sparkles.
 *
 * Entirely inline SVG — crisp at any size, themable from CSS tokens, and it
 * adds nothing to the network waterfall. Decorative, so it carries
 * `aria-hidden` and the surrounding section supplies the real content.
 */

/** Code lines drawn inside the laptop screen: [x, y, width, colour]. */
const CODE_LINES: Array<[number, number, number, string]> = [
  [146, 176, 54, "#FF8FAB"],
  [208, 176, 86, "#7DD3FC"],
  [300, 176, 38, "#C4B5FD"],

  [162, 196, 42, "#C4B5FD"],
  [212, 196, 66, "#FDE68A"],
  [286, 196, 34, "#86EFAC"],

  [162, 216, 74, "#7DD3FC"],
  [244, 216, 46, "#FF8FAB"],

  [178, 236, 58, "#FDE68A"],
  [244, 236, 92, "#86EFAC"],
  [344, 236, 30, "#7DD3FC"],

  [178, 256, 40, "#FF8FAB"],
  [226, 256, 62, "#C4B5FD"],

  [162, 276, 50, "#86EFAC"],
  [220, 276, 78, "#7DD3FC"],
  [306, 276, 44, "#FDE68A"],

  [146, 296, 68, "#C4B5FD"],
  [222, 296, 52, "#FF8FAB"],
];

const SPARKLE =
  "M0,-10 C1.6,-3.2 3.2,-1.6 10,0 C3.2,1.6 1.6,3.2 0,10 C-1.6,3.2 -3.2,1.6 -10,0 C-3.2,-1.6 -1.6,-3.2 0,-10 Z";

const SPARKLES: Array<{
  x: number;
  y: number;
  s: number;
  fill: string;
  delay: string;
}> = [
  { x: 92, y: 74, s: 0.85, fill: "var(--scene-spark)", delay: "0s" },
  { x: 604, y: 46, s: 1.15, fill: "#E11D48", delay: "0.7s" },
  { x: 452, y: 66, s: 0.65, fill: "#A78BFA", delay: "1.4s" },
  { x: 44, y: 268, s: 0.8, fill: "#E11D48", delay: "2.1s" },
  { x: 626, y: 336, s: 0.95, fill: "var(--scene-spark)", delay: "1.1s" },
  { x: 396, y: 404, s: 0.6, fill: "#A78BFA", delay: "2.6s" },
];

export function HeroScene({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 660 456"
        role="presentation"
        className="h-auto w-full overflow-visible"
      >
        {/* ---- Organic background blobs -------------------------------- */}
        <g className={reduced ? undefined : "animate-drift"}>
          <path
            d="M126,58 C246,4 420,18 522,72 C624,126 660,238 606,326 C552,414 404,452 276,438 C148,424 40,368 20,268 C0,168 6,112 126,58 Z"
            fill="var(--scene-blob-a)"
          />
        </g>
        <path
          d="M420,96 C516,74 596,132 606,212 C616,292 552,352 470,356 C388,360 336,300 342,222 C348,144 324,118 420,96 Z"
          fill="var(--scene-blob-b)"
          opacity="0.75"
        />

        {/* ---- Plant (behind the laptop) ------------------------------- */}
        <g className={reduced ? undefined : "animate-float-slow"}>
          <path
            d="M64,372 C42,340 34,306 48,282 C64,300 70,336 64,372 Z"
            fill="#6BCB77"
          />
          <path
            d="M68,374 C74,332 92,302 118,292 C114,330 96,360 68,374 Z"
            fill="#86EFAC"
          />
          <path
            d="M60,376 C34,364 16,338 16,312 C40,322 56,348 60,376 Z"
            fill="#4DAE5C"
          />
          <path d="M28,374 h72 l-9,46 a7,7 0 0 1 -7,6 h-40 a7,7 0 0 1 -7,-6 Z" fill="#FF8FAB" />
          <rect x="22" y="366" width="84" height="14" rx="6" fill="#E11D48" />
        </g>

        {/* ---- Laptop --------------------------------------------------- */}
        <g>
          {/* Base */}
          <rect x="100" y="354" width="360" height="16" rx="8" fill="var(--scene-deck)" />
          <rect x="250" y="354" width="60" height="6" rx="3" fill="var(--scene-deck)" />
          {/* Lid */}
          <rect x="110" y="118" width="340" height="234" rx="16" fill="var(--scene-object)" />
          <rect x="124" y="132" width="312" height="186" rx="7" fill="#0E1533" />
          <circle cx="280" cy="126" r="2.6" fill="#4A5590" />

          {/* Window chrome dots */}
          <circle cx="146" cy="150" r="4" fill="#FF6B6B" />
          <circle cx="160" cy="150" r="4" fill="#FFD93D" />
          <circle cx="174" cy="150" r="4" fill="#6BCB77" />

          {/* Code — each line wipes in from the left, one after another */}
          <g>
            {CODE_LINES.map(([x, y, w, fill], i) => (
              <motion.rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width={w}
                height="7"
                rx="3.5"
                fill={fill}
                style={{ transformOrigin: "left center", transformBox: "fill-box" }}
                initial={reduced ? undefined : { scaleX: 0, opacity: 0 }}
                animate={reduced ? undefined : { scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 0.32,
                  delay: 0.5 + i * 0.075,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
            {/* Blinking cursor at the end of the last line */}
            <motion.rect
              x="280"
              y="295"
              width="8"
              height="9"
              rx="1.5"
              fill="#FFF8F2"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ delay: 0.5 + CODE_LINES.length * 0.075 }}
              className={reduced ? undefined : "animate-blink"}
            />
          </g>
        </g>

        {/* ---- Floating phone ------------------------------------------ */}
        <motion.g
          initial={reduced ? undefined : { y: 18, opacity: 0 }}
          animate={reduced ? undefined : { y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <g className={reduced ? undefined : "animate-float"}>
            <rect x="472" y="86" width="122" height="240" rx="22" fill="var(--scene-object)" />
            <rect x="480" y="94" width="106" height="224" rx="15" fill="#FFF8F2" />
            <rect x="514" y="99" width="38" height="6" rx="3" fill="var(--scene-object)" />
            {/* App mock. A phone screen is lit in both themes, so its contents
                stay literal pastels rather than following the page tokens. */}
            <rect x="492" y="118" width="52" height="9" rx="4.5" fill="#FBDCE7" />
            <rect x="492" y="136" width="82" height="56" rx="10" fill="#E2DDF8" />
            <circle cx="512" cy="158" r="9" fill="#FF8FAB" />
            <rect x="528" y="152" width="36" height="6" rx="3" fill="#C4B5FD" />
            <rect x="528" y="164" width="24" height="6" rx="3" fill="#C4B5FD" />
            <rect x="492" y="202" width="82" height="7" rx="3.5" fill="#EFE3E9" />
            <rect x="492" y="216" width="60" height="7" rx="3.5" fill="#EFE3E9" />
            <rect x="492" y="238" width="82" height="26" rx="9" fill="#E11D48" />
            <rect x="514" y="248" width="38" height="6" rx="3" fill="#FFF8F2" />
            <rect x="504" y="300" width="58" height="4" rx="2" fill="#C9CBE8" />
          </g>
        </motion.g>

        {/* ---- `</>` speech bubble ------------------------------------- */}
        <motion.g
          initial={reduced ? undefined : { scale: 0.7, opacity: 0 }}
          animate={reduced ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: "192px 90px", transformBox: "view-box" }}
        >
          <g className={reduced ? undefined : "animate-float-slow"}>
            <path
              d="M158,44 h96 a16,16 0 0 1 16,16 v44 a16,16 0 0 1 -16,16 h-54 l-24,20 4,-20 h-22 a16,16 0 0 1 -16,-16 v-44 a16,16 0 0 1 16,-16 Z"
              fill="var(--scene-surface)"
              stroke="var(--scene-ink)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <text
              x="206"
              y="93"
              textAnchor="middle"
              fill="var(--scene-ink)"
              fontSize="30"
              fontWeight="700"
              fontFamily="var(--font-mono, monospace)"
            >
              {"</>"}
            </text>
          </g>
        </motion.g>

        {/* ---- Mug ------------------------------------------------------ */}
        <motion.g
          initial={reduced ? undefined : { y: 14, opacity: 0 }}
          animate={reduced ? undefined : { y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Steam — kept short so it clears the floating phone above. */}
          <path
            d="M528,356 c-6,-9 6,-15 0,-24"
            stroke="#C9CBE8"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            className={reduced ? undefined : "animate-float-slow"}
          />
          <path
            d="M552,358 c-6,-9 6,-15 0,-24"
            stroke="#C9CBE8"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            className={reduced ? undefined : "animate-float"}
          />
          <path
            d="M578,398 a20,20 0 0 1 0,30"
            stroke="var(--scene-object)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M506,370 h70 v36 a22,22 0 0 1 -22,22 h-26 a22,22 0 0 1 -22,-22 Z" fill="var(--scene-object)" />
          <text
            x="541"
            y="406"
            textAnchor="middle"
            fill="var(--scene-object-fg)"
            fontSize="19"
            fontWeight="800"
            fontFamily="var(--font-display, sans-serif)"
          >
            AA.
          </text>
        </motion.g>

        {/* ---- Sparkles -------------------------------------------------
            Placement lives on the wrapper <g> and the animation on the inner
            <path>: a CSS `transform` in a keyframe replaces the element's
            entire `transform` attribute, so animating the positioned node
            directly would drag every sparkle back to the origin. */}
        {SPARKLES.map((s) => (
          <g
            key={`${s.x}-${s.y}`}
            transform={`translate(${s.x} ${s.y}) scale(${s.s})`}
          >
            <path
              d={SPARKLE}
              fill={s.fill}
              className={reduced ? undefined : "animate-sparkle"}
              style={{
                transformOrigin: "center",
                transformBox: "fill-box",
                animationDelay: s.delay,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
