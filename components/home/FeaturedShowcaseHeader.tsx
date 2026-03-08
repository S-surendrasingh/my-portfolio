"use client";

import { Caveat } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { FeaturedShowcaseTypingBadge } from "./FeaturedShowcaseTypingBadge";

const subtextScript = Caveat({ subsets: ["latin"], weight: ["500", "600"] });

const ease = [0.22, 1, 0.36, 1] as const;

const wrapperClassName =
  "relative mx-auto w-full max-w-3xl px-2 text-center sm:px-4";

const titleGradientClassName =
  "inline-block bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient";

const titleShellClassName =
  "mb-4 text-3xl font-extrabold tracking-tight sm:whitespace-nowrap sm:text-5xl";

const subtextClassName = cn(
  subtextScript.className,
  "mx-auto inline-block max-w-2xl bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-300 bg-clip-text text-sm italic text-transparent sm:max-w-none sm:whitespace-nowrap sm:text-lg"
);

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease, delay },
  }),
};

function AmbientGlow() {
  return (
    <div
      className="pointer-events-none absolute -top-10 left-1/2 h-32 w-96 -translate-x-1/2 bg-purple-600/20 blur-[100px]"
      aria-hidden="true"
    />
  );
}

export function FeaturedShowcaseHeader() {
  const reduceMotion = useReducedMotion();

  const titleInnerClassName = cn(
    titleGradientClassName,
    !reduceMotion && "animate-title-breathe"
  );

  if (reduceMotion) {
    return (
      <div className={wrapperClassName}>
        <AmbientGlow />
        <FeaturedShowcaseTypingBadge />
        <h2 className={titleShellClassName}>
          <span className={titleGradientClassName}>Built for Scale & Performance</span>
        </h2>
        <p className={subtextClassName}>
          High-performing full-stack apps and AI systems designed to grow your business reliably.
        </p>
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <AmbientGlow />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
        variants={item}
      >
        <FeaturedShowcaseTypingBadge />
      </motion.div>

      <motion.h2
        className={titleShellClassName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0.1}
        variants={item}
      >
        <span className={titleInnerClassName}>Built for Scale & Performance</span>
      </motion.h2>

      <motion.p
        className={subtextClassName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0.2}
        variants={item}
      >
        High-performing full-stack apps and AI systems designed to grow your business reliably.
      </motion.p>
    </div>
  );
}
