"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Globe, Layers, ShieldCheck, type LucideIcon } from "lucide-react";
import { Caveat } from "next/font/google";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import type { AboutTrustAccent, AboutTrustItem } from "@/lib/about-content";
import { ABOUT_TRUST_ITEMS } from "@/lib/about-content";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

const detailScript = Caveat({ subsets: ["latin"], weight: ["500", "600"] });

const HIGHLIGHT_PATTERN = /\{\{(.+?)\}\}/g;

function TrustDetailNote({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const re = new RegExp(HIGHLIGHT_PATTERN.source, "g");
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span
        key={`${match.index}-${match[1]}`}
        className="font-semibold text-purple-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.35)]"
      >
        {match[1]}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <p
      className={cn(
        detailScript.className,
        "mt-3 flex-1 rounded-lg border border-purple-500/15 bg-purple-500/[0.06] px-3 py-2 leading-snug text-purple-100/90",
        "max-lg:font-sans max-lg:text-xs max-lg:italic",
        "lg:text-[1.15rem] lg:not-italic"
      )}
    >
      {parts}
    </p>
  );
}

const TITLE_WORDS = [
  { text: "Why", gradient: "from-purple-300 via-violet-300 to-purple-400" },
  { text: "Clients", gradient: "from-fuchsia-300 via-pink-300 to-rose-400" },
  { text: "Hire", gradient: "from-indigo-300 via-blue-300 to-violet-400" },
  { text: "Me", gradient: "from-white via-purple-200 to-fuchsia-300" },
] as const;

const TRUST_ICONS: Record<AboutTrustItem["id"], LucideIcon> = {
  remote: Globe,
  quality: ShieldCheck,
  execution: Layers,
  delivery: CalendarCheck,
};

const accentStyles: Record<
  AboutTrustAccent,
  {
    iconWrap: string;
    hoverBorder: string;
    hoverShadow: string;
    topBar: string;
  }
> = {
  purple: {
    iconWrap:
      "border-purple-500/35 bg-gradient-to-br from-purple-600/35 to-indigo-600/20 text-purple-200",
    hoverBorder: "hover:border-purple-500/45",
    hoverShadow: "hover:shadow-[0_0_28px_rgba(168,85,247,0.18)]",
    topBar: "bg-gradient-to-r from-purple-500/80 to-violet-500/40",
  },
  emerald: {
    iconWrap:
      "border-emerald-500/35 bg-gradient-to-br from-emerald-600/30 to-teal-600/15 text-emerald-200",
    hoverBorder: "hover:border-emerald-500/45",
    hoverShadow: "hover:shadow-[0_0_28px_rgba(16,185,129,0.15)]",
    topBar: "bg-gradient-to-r from-emerald-500/80 to-teal-500/40",
  },
  indigo: {
    iconWrap:
      "border-indigo-500/35 bg-gradient-to-br from-indigo-600/30 to-violet-600/15 text-indigo-200",
    hoverBorder: "hover:border-indigo-500/45",
    hoverShadow: "hover:shadow-[0_0_28px_rgba(99,102,241,0.18)]",
    topBar: "bg-gradient-to-r from-indigo-500/80 to-violet-500/40",
  },
  amber: {
    iconWrap:
      "border-amber-500/35 bg-gradient-to-br from-amber-600/25 to-orange-600/15 text-amber-200",
    hoverBorder: "hover:border-amber-500/45",
    hoverShadow: "hover:shadow-[0_0_28px_rgba(245,158,11,0.14)]",
    topBar: "bg-gradient-to-r from-amber-500/80 to-orange-500/40",
  },
};

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const titleWordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 24, scale: 0.92, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

const titleWordReduced = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

const cardMotionReduced = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function AnimatedTitle({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.h2
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-3xl font-extrabold tracking-tight sm:gap-x-3 sm:text-4xl lg:text-5xl"
      variants={titleWordContainer}
    >
      {TITLE_WORDS.map((word) => (
        <motion.span
          key={word.text}
          variants={reduceMotion ? titleWordReduced : titleWord}
          className={cn(
            "inline-block bg-gradient-to-r bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.25)]",
            word.gradient
          )}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.h2>
  );
}

function TrustCard({
  item,
  reduceMotion,
}: {
  item: AboutTrustItem;
  reduceMotion: boolean | null;
}) {
  const Icon = TRUST_ICONS[item.id];
  const accent = accentStyles[item.accent];

  return (
    <motion.li
      variants={reduceMotion ? cardMotionReduced : cardMotion}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
      className={cn(
        "group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-md transition-all duration-300 sm:min-h-[340px] md:p-6",
        accent.hoverBorder,
        accent.hoverShadow
      )}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-0.5 scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100",
          accent.topBar
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-[0_0_16px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110",
          accent.iconWrap
        )}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{item.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
        <span className="font-semibold text-white">{item.lead}</span> {item.body}
      </p>
      <TrustDetailNote text={item.detail} />
    </motion.li>
  );
}

export function WhyClientsHire() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-4 pt-14 pb-8 sm:px-8 sm:pt-20 sm:pb-10">
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[min(520px,85vw)] w-[min(900px,95vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]"
        aria-hidden="true"
      />
      <Container>
        <div className="relative mx-auto max-w-7xl">
          <motion.header
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={headerContainer}
          >
            <AnimatedTitle reduceMotion={reduceMotion} />
            <motion.p
              className="mt-4 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-300 bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-2xl"
              variants={headerItem}
            >
              Trust &amp; quality guarantee
            </motion.p>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
              variants={headerItem}
            >
              Senior-level ownership without the agency overhead — built for{" "}
              <span className="font-medium text-purple-200/90">Upwork</span>,{" "}
              <span className="font-medium text-fuchsia-200/90">LinkedIn</span>, and long-term product
              partnerships.
            </motion.p>
          </motion.header>

          <motion.ul
            className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={listContainer}
          >
            {ABOUT_TRUST_ITEMS.map((item) => (
              <TrustCard key={item.id} item={item} reduceMotion={reduceMotion} />
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
