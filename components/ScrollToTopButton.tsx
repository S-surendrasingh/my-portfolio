"use client";

export function ScrollToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-500/25 bg-zinc-900/80 text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-500/60 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 19V5M6 11l6-6 6 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
