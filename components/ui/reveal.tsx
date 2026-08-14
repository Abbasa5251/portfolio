"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fires once the element is ~80px inside the viewport. */
const VIEWPORT = { once: true, margin: "-80px" } as const;

/**
 * Scroll-triggered fade + slide. Fires once, then stays put.
 *
 * With `prefers-reduced-motion` the element renders in its final state
 * immediately — no transform, no fade — so nothing is hidden from anyone who
 * has motion turned off.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Where the element travels in from. */
  direction?: Direction;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const { x, y } = OFFSET[direction];

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      data-reveal=""
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrap a list so its children animate in one after another. Pair with
 * `<StaggerItem>` for each child.
 */
export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds between each child starting. */
  gap?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} data-reveal="" variants={itemVariants}>
      {children}
    </motion.div>
  );
}
