"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AboutHeroTypewriterHeadline } from "@/components/about/AboutHeroTypewriterHeadline";
import {
  aboutHeroStatCardAccentClassNames,
  aboutHeroStatCardBaseClassName,
  aboutHeroStatValueAccentClassNames,
  aboutHeroTechPillAccentClassNames,
  aboutHeroTechPillBaseClassName,
} from "@/components/about/aboutStyles";
import { IconDownload } from "@/components/icons";
import { ABOUT_HERO_FOCUS_BADGES, ABOUT_HERO_STATS } from "@/lib/about-content";
import { RESUME_DOWNLOAD_FILENAME, RESUME_PDF_URL } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  delay,
  children,
  className,
}: {
  delay: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const paragraphMotion =
  "text-sm leading-snug text-zinc-300 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] lg:leading-relaxed";

const gradientYears =
  "bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text font-bold text-transparent";

const gradientAiStack =
  "bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text font-bold text-transparent";

export function AboutHeroLeftColumn({ className }: { className?: string }) {
  return (
    <div className={cn("flex min-h-0 min-w-0 flex-col space-y-4 lg:space-y-5", className)}>
      <Reveal delay={0.1}>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
            aria-hidden="true"
          />
          Available for Remote Senior Roles (India / Global)
        </div>
      </Reveal>

      <AboutHeroTypewriterHeadline className="!mb-0 shrink-0" />

      <div className="mt-5 max-w-xl space-y-2.5 sm:mt-6 lg:mt-7 lg:space-y-3">
        <motion.p
          className={paragraphMotion}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <span className={gradientYears}>8+ years</span> of professional software development
          experience across{" "}
          <span className="font-semibold text-zinc-100">
            Ruby on Rails, React JS, TypeScript, Node.js, Python (Flask, FastAPI, Django)
          </span>
          ,{" "}
          <span className={gradientAiStack}>DevOps, and production AI/LLMs</span>.
        </motion.p>
        <motion.p
          className={paragraphMotion}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38, ease }}
        >
          Based in <span className="font-medium text-purple-300">India</span>, I partner{" "}
          <span className="font-medium text-purple-300">remotely with global startups</span> and
          product teams on{" "}
          <span className="font-medium text-zinc-100">
            technical leadership, backend architecture, and end-to-end delivery
          </span>{" "}
          clients can scale in production.
        </motion.p>
      </div>

      <Reveal delay={0.4}>
        <div className="flex flex-wrap gap-2">
          {ABOUT_HERO_FOCUS_BADGES.map((badge, index) => (
            <span
              key={badge}
              className={cn(
                aboutHeroTechPillBaseClassName,
                aboutHeroTechPillAccentClassNames[index % aboutHeroTechPillAccentClassNames.length]
              )}
            >
              {badge}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="grid max-w-xl grid-cols-1 gap-3 pt-2 min-[420px]:grid-cols-3">
          {ABOUT_HERO_STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={cn(
                aboutHeroStatCardBaseClassName,
                aboutHeroStatCardAccentClassNames[index % aboutHeroStatCardAccentClassNames.length],
                "p-2.5 lg:p-3"
              )}
            >
              <p
                className={cn(
                  "text-xs font-bold sm:text-sm",
                  aboutHeroStatValueAccentClassNames[index % aboutHeroStatValueAccentClassNames.length]
                )}
              >
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-zinc-300/90 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-purple-600 px-5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] lg:h-11 lg:px-6"
          >
            Let&apos;s Build Together
          </Link>
          <a
            href={RESUME_PDF_URL}
            download={RESUME_DOWNLOAD_FILENAME}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.06] lg:h-11 lg:px-6 [&>svg]:shrink-0"
          >
            <IconDownload width={16} height={16} strokeWidth={2} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </div>
  );
}
