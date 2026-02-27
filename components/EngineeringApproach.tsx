"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Code2, Compass, Rocket, Search, Sparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const TYPEWRITER_HEADING = "How I approach every project";
const TYPEWRITER_GRADIENT_START = "How I ".length;
const TYPEWRITER_CHAR_MS = 100;
const ease = [0.22, 1, 0.36, 1] as const;

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const gradientPhraseClassName =
  "bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]";

const badgeClassName =
  "mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/15 px-5 py-2 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.3)] sm:text-sm";

function TypewriterHeading() {
  const [displayed, setDisplayed] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (complete) return;

    if (displayed.length < TYPEWRITER_HEADING.length) {
      const timeoutId = setTimeout(() => {
        setDisplayed(TYPEWRITER_HEADING.slice(0, displayed.length + 1));
      }, TYPEWRITER_CHAR_MS);
      return () => clearTimeout(timeoutId);
    }

    const timeoutId = setTimeout(() => setComplete(true), 0);
    return () => clearTimeout(timeoutId);
  }, [displayed, complete]);

  const leadText = displayed.slice(0, TYPEWRITER_GRADIENT_START);
  const gradientText =
    displayed.length > TYPEWRITER_GRADIENT_START
      ? displayed.slice(TYPEWRITER_GRADIENT_START)
      : "";

  return (
    <h2
      className="mb-4 min-h-[1.2em] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
      aria-label={TYPEWRITER_HEADING}
    >
      <span aria-hidden="true">
        {leadText}
        {gradientText ? <span className={gradientPhraseClassName}>{gradientText}</span> : null}
        {!complete ? (
          <span className="animate-pulse font-light text-purple-400">|</span>
        ) : null}
      </span>
    </h2>
  );
}

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const cardClassName =
  "group relative overflow-hidden rounded-2xl border border-purple-500/10 bg-zinc-900/40 p-6 text-left backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]";

const iconWrapperClassName =
  "mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/40 bg-gradient-to-br from-purple-600/30 to-indigo-600/20 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]";

const stepBadgeClassName =
  "rounded-full border border-purple-500/30 bg-purple-500/15 px-2.5 py-0.5 font-mono text-xs font-bold text-purple-300 transition-colors group-hover:bg-purple-500/30";

const highlightToneClass = {
  purple:
    "font-semibold text-purple-300 bg-purple-500/10 px-1 py-0.5 rounded border border-purple-500/20",
  indigo:
    "font-semibold text-indigo-300 bg-indigo-500/10 px-1 py-0.5 rounded border border-indigo-500/20",
  pink: "font-semibold text-pink-300 bg-pink-500/10 px-1 py-0.5 rounded border border-pink-500/20",
} as const;

type HighlightTone = keyof typeof highlightToneClass;

function Highlight({ tone, children }: { tone: HighlightTone; children: ReactNode }) {
  return <span className={highlightToneClass[tone]}>{children}</span>;
}

const PRINCIPLES: {
  step: string;
  Icon: LucideIcon;
  title: string;
  description: ReactNode;
}[] = [
  {
    step: "01",
    Icon: Search,
    title: "Understand Deeply",
    description: (
      <>
        Understand the <Highlight tone="purple">problem, users</Highlight>, and{" "}
        <Highlight tone="purple">business goals</Highlight> before implementation.
      </>
    ),
  },
  {
    step: "02",
    Icon: Compass,
    title: "Design Thoughtfully",
    description: (
      <>
        Design systems that are <Highlight tone="indigo">maintainable, secure</Highlight>, and easy
        to <Highlight tone="indigo">evolve</Highlight>.
      </>
    ),
  },
  {
    step: "03",
    Icon: Code2,
    title: "Build Precisely",
    description: (
      <>
        Write <Highlight tone="pink">clean, maintainable code</Highlight> and follow strong{" "}
        <Highlight tone="pink">engineering practices</Highlight>.
      </>
    ),
  },
  {
    step: "04",
    Icon: Rocket,
    title: "Deliver Value",
    description: (
      <>
        Focus on <Highlight tone="purple">shipping</Highlight> useful products that create{" "}
        <Highlight tone="purple">real impact</Highlight>.
      </>
    ),
  },
];

export function EngineeringApproach() {
  return (
    <section className="px-4 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          className="mx-auto max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headerContainer}
        >
          <motion.div variants={headerItem}>
            <motion.div
              className="inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={badgeClassName}>
                <Sparkles
                  className="h-3.5 w-3.5 shrink-0 text-purple-300 drop-shadow-[0_0_6px_rgba(168,85,247,0.9)] sm:h-4 sm:w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Engineering Approach
              </span>
            </motion.div>
          </motion.div>

          <motion.div variants={headerItem}>
            <TypewriterHeading />
          </motion.div>

          <motion.p
            className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400"
            variants={headerItem}
          >
            A structured, high-performance workflow built for scalability and clean architecture.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PRINCIPLES.map(({ step, Icon, title, description }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className={cardClassName}
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className={cn("absolute right-4 top-4", stepBadgeClassName)}>{step}</span>
              <div className={iconWrapperClassName}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-200">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
