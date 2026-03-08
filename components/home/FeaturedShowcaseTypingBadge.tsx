"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const BADGE_TEXT = "Featured Work";
const TYPE_MS = 95;
const PAUSE_MS = 2200;
const DELETE_MS = 55;

const badgeClassName =
  "mb-4 inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 font-mono text-sm font-bold tracking-widest text-purple-300 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/25 sm:text-base";

function BlinkingCursor() {
  return (
    <span className="ml-0.5 inline-block w-[2px] animate-pulse text-purple-400" aria-hidden="true">
      |
    </span>
  );
}

export function FeaturedShowcaseTypingBadge({ className }: { className?: string }) {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const prefers = mq.matches;
      setReduceMotion(prefers);
      if (prefers) setDisplay(BADGE_TEXT);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    if (!deleting && display.length < BADGE_TEXT.length) {
      const id = window.setTimeout(
        () => setDisplay(BADGE_TEXT.slice(0, display.length + 1)),
        TYPE_MS
      );
      return () => window.clearTimeout(id);
    }

    if (!deleting && display.length === BADGE_TEXT.length) {
      const id = window.setTimeout(() => setDeleting(true), PAUSE_MS);
      return () => window.clearTimeout(id);
    }

    if (deleting && display.length > 0) {
      const id = window.setTimeout(
        () => setDisplay(BADGE_TEXT.slice(0, display.length - 1)),
        DELETE_MS
      );
      return () => window.clearTimeout(id);
    }

    if (deleting && display.length === 0) {
      const id = window.setTimeout(() => setDeleting(false), 0);
      return () => window.clearTimeout(id);
    }
  }, [display, deleting, reduceMotion]);

  return (
    <p className={cn(badgeClassName, className)} aria-label={BADGE_TEXT}>
      <span>{display}</span>
      {!reduceMotion && <BlinkingCursor />}
    </p>
  );
}
