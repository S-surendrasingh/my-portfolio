"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const HEADLINE_LINES = [
  "Building products.",
  "Solving problems.",
  "Creating impact.",
] as const;

const CHAR_MS = 85;
const LINE_PAUSE_MS = 450;
const CURSOR_HIDE_AFTER_MS = 2800;

const lineMetricsClassName =
  "block text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-tight xl:text-4xl";

const gradientTextClassName =
  "bg-gradient-to-r from-white via-zinc-100 to-purple-300 bg-clip-text text-transparent";

function BlinkingCursor() {
  return (
    <span className="ml-0.5 inline-block animate-pulse font-light text-purple-400" aria-hidden="true">
      |
    </span>
  );
}

export function AboutHeroTypewriterHeadline({ className }: { className?: string }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "line-pause" | "complete">("typing");
  const [showCursor, setShowCursor] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const prefersReduced = mq.matches;
      setReduceMotion(prefersReduced);
      if (prefersReduced) {
        setLineIndex(HEADLINE_LINES.length - 1);
        setCharCount(HEADLINE_LINES[HEADLINE_LINES.length - 1].length);
        setPhase("complete");
        setShowCursor(false);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion || phase !== "line-pause") return;
    const id = window.setTimeout(() => {
      setLineIndex((current) => current + 1);
      setCharCount(0);
      setPhase("typing");
    }, LINE_PAUSE_MS);
    return () => window.clearTimeout(id);
  }, [phase, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || phase !== "typing") return;

    const currentLine = HEADLINE_LINES[lineIndex];
    if (charCount < currentLine.length) {
      const id = window.setTimeout(() => setCharCount((count) => count + 1), CHAR_MS);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      if (lineIndex < HEADLINE_LINES.length - 1) {
        setPhase("line-pause");
      } else {
        setPhase("complete");
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [phase, lineIndex, charCount, reduceMotion]);

  useEffect(() => {
    if (phase !== "complete") return;
    const id = window.setTimeout(() => setShowCursor(false), CURSOR_HIDE_AFTER_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  const fullText = HEADLINE_LINES.join(" ");

  return (
    <h1 className={cn("mb-0", className)} aria-label={fullText}>
      <span className="block" aria-hidden="true">
        {HEADLINE_LINES.map((line, index) => {
          const isPast = index < lineIndex;
          const isCurrent = index === lineIndex;
          const visibleText = isPast
            ? line
            : isCurrent
              ? line.slice(0, charCount)
              : "";

          const showCursorOnLine = showCursor && isCurrent;

          return (
            <span key={line} className="relative block">
              <span className={cn("invisible select-none", lineMetricsClassName)} aria-hidden="true">
                {line}
              </span>
              <span
                className={cn(
                  "absolute left-0 top-0 whitespace-pre",
                  lineMetricsClassName,
                  gradientTextClassName
                )}
              >
                {visibleText}
                {showCursorOnLine ? <BlinkingCursor /> : null}
              </span>
            </span>
          );
        })}
      </span>
    </h1>
  );
}
