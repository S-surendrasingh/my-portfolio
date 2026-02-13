"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Brain, Cloud, Code2, Database, Terminal, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { ABOUT_CORE_SKILLS } from "@/lib/about-content";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

const SKILL_ICONS: LucideIcon[] = [Code2, Brain, Terminal, Cloud, Database, Users];

const cardBaseClassName =
  "group flex h-full flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 ease-out motion-safe:hover:scale-[1.04] motion-safe:hover:z-10";

const tagBaseClassName =
  "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 motion-safe:hover:scale-105";

const iconBaseClassName =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 motion-safe:group-hover:scale-110";

type SkillCardAccent = {
  card: string;
  icon: string;
  title: string;
  tags: readonly string[];
};

const SKILL_CARD_ACCENTS: SkillCardAccent[] = [
  {
    card:
      "border-violet-500/35 bg-gradient-to-br from-violet-500/20 via-purple-500/8 to-slate-900/30 motion-safe:hover:border-violet-400/55 motion-safe:hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]",
    icon:
      "border-violet-400/45 bg-violet-500/25 text-violet-100 shadow-[0_0_14px_rgba(139,92,246,0.35)] motion-safe:group-hover:border-violet-300/60",
    title: "motion-safe:group-hover:text-violet-100",
    tags: [
      "border-rose-500/40 bg-rose-500/20 text-rose-100 motion-safe:hover:border-rose-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(244,63,94,0.3)]",
      "border-sky-500/40 bg-sky-500/20 text-sky-100 motion-safe:hover:border-sky-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(56,189,248,0.3)]",
      "border-blue-500/40 bg-blue-500/20 text-blue-100 motion-safe:hover:border-blue-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]",
      "border-emerald-500/40 bg-emerald-500/20 text-emerald-100 motion-safe:hover:border-emerald-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(52,211,153,0.3)]",
    ],
  },
  {
    card:
      "border-fuchsia-500/35 bg-gradient-to-br from-fuchsia-500/20 via-pink-500/8 to-slate-900/30 motion-safe:hover:border-fuchsia-400/55 motion-safe:hover:shadow-[0_0_32px_rgba(217,70,239,0.35)]",
    icon:
      "border-fuchsia-400/45 bg-fuchsia-500/25 text-fuchsia-100 shadow-[0_0_14px_rgba(217,70,239,0.35)] motion-safe:group-hover:border-fuchsia-300/60",
    title: "motion-safe:group-hover:text-fuchsia-100",
    tags: [
      "border-pink-500/40 bg-pink-500/20 text-pink-100 motion-safe:hover:border-pink-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(236,72,153,0.3)]",
      "border-purple-500/40 bg-purple-500/20 text-purple-100 motion-safe:hover:border-purple-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(168,85,247,0.3)]",
      "border-indigo-500/40 bg-indigo-500/20 text-indigo-100 motion-safe:hover:border-indigo-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(99,102,241,0.3)]",
      "border-violet-500/40 bg-violet-500/20 text-violet-100 motion-safe:hover:border-violet-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(139,92,246,0.3)]",
    ],
  },
  {
    card:
      "border-amber-500/35 bg-gradient-to-br from-amber-500/18 via-yellow-500/8 to-slate-900/30 motion-safe:hover:border-amber-400/55 motion-safe:hover:shadow-[0_0_32px_rgba(251,191,36,0.3)]",
    icon:
      "border-amber-400/45 bg-amber-500/25 text-amber-100 shadow-[0_0_14px_rgba(251,191,36,0.35)] motion-safe:group-hover:border-amber-300/60",
    title: "motion-safe:group-hover:text-amber-100",
    tags: [
      "border-amber-500/40 bg-amber-500/20 text-amber-100 motion-safe:hover:border-amber-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(251,191,36,0.28)]",
      "border-orange-500/40 bg-orange-500/20 text-orange-100 motion-safe:hover:border-orange-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(251,146,60,0.3)]",
      "border-yellow-500/40 bg-yellow-500/15 text-yellow-100 motion-safe:hover:border-yellow-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(250,204,21,0.25)]",
      "border-lime-500/40 bg-lime-500/15 text-lime-100 motion-safe:hover:border-lime-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(132,204,22,0.28)]",
    ],
  },
  {
    card:
      "border-cyan-500/35 bg-gradient-to-br from-cyan-500/20 via-teal-500/8 to-slate-900/30 motion-safe:hover:border-cyan-400/55 motion-safe:hover:shadow-[0_0_32px_rgba(34,211,238,0.35)]",
    icon:
      "border-cyan-400/45 bg-cyan-500/25 text-cyan-100 shadow-[0_0_14px_rgba(34,211,238,0.35)] motion-safe:group-hover:border-cyan-300/60",
    title: "motion-safe:group-hover:text-cyan-100",
    tags: [
      "border-cyan-500/40 bg-cyan-500/20 text-cyan-100 motion-safe:hover:border-cyan-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(34,211,238,0.3)]",
      "border-teal-500/40 bg-teal-500/20 text-teal-100 motion-safe:hover:border-teal-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(45,212,191,0.3)]",
      "border-sky-500/40 bg-sky-500/20 text-sky-100 motion-safe:hover:border-sky-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(56,189,248,0.3)]",
      "border-blue-500/40 bg-blue-500/20 text-blue-100 motion-safe:hover:border-blue-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]",
    ],
  },
  {
    card:
      "border-blue-500/35 bg-gradient-to-br from-blue-500/20 via-indigo-500/8 to-slate-900/30 motion-safe:hover:border-blue-400/55 motion-safe:hover:shadow-[0_0_32px_rgba(59,130,246,0.35)]",
    icon:
      "border-blue-400/45 bg-blue-500/25 text-blue-100 shadow-[0_0_14px_rgba(59,130,246,0.35)] motion-safe:group-hover:border-blue-300/60",
    title: "motion-safe:group-hover:text-blue-100",
    tags: [
      "border-blue-500/40 bg-blue-500/20 text-blue-100 motion-safe:hover:border-blue-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]",
      "border-indigo-500/40 bg-indigo-500/20 text-indigo-100 motion-safe:hover:border-indigo-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(99,102,241,0.3)]",
      "border-violet-500/40 bg-violet-500/20 text-violet-100 motion-safe:hover:border-violet-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(139,92,246,0.3)]",
      "border-slate-400/35 bg-slate-500/20 text-slate-100 motion-safe:hover:border-slate-300/50 motion-safe:hover:shadow-[0_0_14px_rgba(148,163,184,0.25)]",
    ],
  },
  {
    card:
      "border-emerald-500/35 bg-gradient-to-br from-emerald-500/20 via-green-500/8 to-slate-900/30 motion-safe:hover:border-emerald-400/55 motion-safe:hover:shadow-[0_0_32px_rgba(52,211,153,0.35)]",
    icon:
      "border-emerald-400/45 bg-emerald-500/25 text-emerald-100 shadow-[0_0_14px_rgba(52,211,153,0.35)] motion-safe:group-hover:border-emerald-300/60",
    title: "motion-safe:group-hover:text-emerald-100",
    tags: [
      "border-emerald-500/40 bg-emerald-500/20 text-emerald-100 motion-safe:hover:border-emerald-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(52,211,153,0.3)]",
      "border-green-500/40 bg-green-500/20 text-green-100 motion-safe:hover:border-green-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(74,222,128,0.28)]",
      "border-lime-500/40 bg-lime-500/15 text-lime-100 motion-safe:hover:border-lime-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(132,204,22,0.28)]",
      "border-teal-500/40 bg-teal-500/20 text-teal-100 motion-safe:hover:border-teal-400/60 motion-safe:hover:shadow-[0_0_14px_rgba(45,212,191,0.3)]",
    ],
  },
];

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
    transition: { staggerChildren: 0.1 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

function CoreSkillsSubtitle() {
  return (
    <p className="mt-4 text-base leading-7 text-muted">
      Production-focused engineering — from{" "}
      <span className="font-medium text-zinc-200">Rails</span> and{" "}
      <span className="font-medium text-zinc-200">React</span> to{" "}
      <span className="font-medium text-purple-200/90">Python microservices</span>,{" "}
      <span className="font-medium text-purple-200/90">AI workflows</span>, and cloud operations.
    </p>
  );
}

export function AboutCoreSkills({ className }: { className?: string }) {
  return (
    <section className={cn(className)}>
      <Container>
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headerContainer}
        >
          <motion.p variants={headerItem}>
            <span
              className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-purple-400"
            >
              Core Skills
            </span>
          </motion.p>
          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            variants={headerItem}
          >
            Technical depth across the stack
          </motion.h2>
          <motion.div variants={headerItem}>
            <CoreSkillsSubtitle />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={gridVariants}
        >
          {ABOUT_CORE_SKILLS.map((skill, index) => {
            const Icon = SKILL_ICONS[index] ?? Code2;
            const accent = SKILL_CARD_ACCENTS[index % SKILL_CARD_ACCENTS.length];
            return (
              <motion.div key={skill.title} variants={cardVariants} className="h-full min-h-0">
                <article className={cn(cardBaseClassName, accent.card)}>
                  <h3
                    className={cn(
                      "mb-4 flex items-center gap-3 text-lg font-semibold text-white transition-colors",
                      accent.title
                    )}
                  >
                    <span className={cn(iconBaseClassName, accent.icon)} aria-hidden="true">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    {skill.title}
                  </h3>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                    {skill.tags.map((tag, tagIndex) => (
                      <li key={tag}>
                        <span
                          className={cn(
                            tagBaseClassName,
                            accent.tags[tagIndex % accent.tags.length]
                          )}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
