"use client";

export function ContactSectionBadge() {
  return (
    <span
      className="mb-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-widest text-purple-300 uppercase shadow-[0_0_20px_rgba(168,85,247,0.25)]"
    >
      <span className="relative mr-2 inline-flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
      </span>
      Available for Projects
    </span>
  );
}
