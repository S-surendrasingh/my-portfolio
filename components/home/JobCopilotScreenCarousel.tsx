"use client";

import type { ShowcaseCarouselScreen } from "@/lib/home-content";

export function JobCopilotScreenCarousel({ screens }: { screens: ShowcaseCarouselScreen[] }) {
  return (
    <div
      className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden"
      aria-label="Job Copilot AI product screens"
    >
      {screens.map((screen, index) => (
        <div
          key={screen.id}
          className="w-[min(85vw,320px)] shrink-0 snap-center"
        >
          <div
            className="flex h-44 flex-col justify-end rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/80 via-zinc-900 to-indigo-950/60 p-4 shadow-[0_0_30px_rgba(168,85,247,0.12)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-purple-400/80">
              Screen {index + 1} / {screens.length}
            </span>
            <p className="mt-1 text-sm font-semibold text-white">{screen.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">{screen.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
