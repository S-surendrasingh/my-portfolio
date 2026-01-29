/** Shared glass + pill tokens for About hero and Core Skills */

export const aboutTopBandClassName =
  "relative overflow-hidden bg-[#0B0813] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_30%,rgba(91,33,182,0.12),transparent_50%),radial-gradient(ellipse_45%_35%_at_0%_70%,rgba(139,92,246,0.1),transparent_45%)]";

/** Hero tech pills — order matches ABOUT_HERO_FOCUS_BADGES */
export const aboutHeroTechPillBaseClassName =
  "inline-flex cursor-default items-center rounded-full border px-3 py-1 text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out motion-safe:hover:scale-110 motion-safe:hover:z-10";

export const aboutHeroTechPillAccentClassNames: readonly string[] = [
  "border-rose-500/45 bg-rose-500/20 text-rose-100 motion-safe:hover:border-rose-400/70 motion-safe:hover:bg-rose-500/30 motion-safe:hover:shadow-[0_0_22px_rgba(244,63,94,0.4)]",
  "border-sky-500/45 bg-sky-500/20 text-sky-100 motion-safe:hover:border-sky-400/70 motion-safe:hover:bg-sky-500/30 motion-safe:hover:shadow-[0_0_22px_rgba(56,189,248,0.4)]",
  "border-blue-500/45 bg-blue-500/20 text-blue-100 motion-safe:hover:border-blue-400/70 motion-safe:hover:bg-blue-500/30 motion-safe:hover:shadow-[0_0_22px_rgba(59,130,246,0.4)]",
  "border-emerald-500/45 bg-emerald-500/20 text-emerald-100 motion-safe:hover:border-emerald-400/70 motion-safe:hover:bg-emerald-500/30 motion-safe:hover:shadow-[0_0_22px_rgba(52,211,153,0.4)]",
  "border-amber-500/45 bg-amber-500/20 text-amber-100 motion-safe:hover:border-amber-400/70 motion-safe:hover:bg-amber-500/30 motion-safe:hover:shadow-[0_0_22px_rgba(251,191,36,0.35)]",
  "border-fuchsia-500/45 bg-gradient-to-r from-fuchsia-500/25 to-purple-500/20 text-fuchsia-100 motion-safe:hover:border-fuchsia-400/70 motion-safe:hover:from-fuchsia-500/35 motion-safe:hover:to-purple-500/30 motion-safe:hover:shadow-[0_0_24px_rgba(217,70,239,0.45)]",
  "border-orange-500/45 bg-orange-500/20 text-orange-100 motion-safe:hover:border-orange-400/70 motion-safe:hover:bg-orange-500/30 motion-safe:hover:shadow-[0_0_22px_rgba(251,146,60,0.4)]",
];

export const aboutHeroStatCardBaseClassName =
  "rounded-xl border backdrop-blur-sm transition-all duration-300 ease-out motion-safe:hover:scale-[1.08] motion-safe:hover:z-10";

/** Hero stat cards — order matches ABOUT_HERO_STATS */
export const aboutHeroStatCardAccentClassNames: readonly string[] = [
  "border-violet-500/40 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent motion-safe:hover:border-violet-400/65 motion-safe:hover:shadow-[0_0_28px_rgba(139,92,246,0.45)]",
  "border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent motion-safe:hover:border-cyan-400/65 motion-safe:hover:shadow-[0_0_28px_rgba(34,211,238,0.4)]",
  "border-pink-500/40 bg-gradient-to-br from-pink-500/20 via-indigo-500/10 to-transparent motion-safe:hover:border-pink-400/65 motion-safe:hover:shadow-[0_0_28px_rgba(236,72,153,0.4)]",
];

export const aboutHeroStatValueAccentClassNames: readonly string[] = [
  "text-violet-200",
  "text-cyan-200",
  "text-pink-200",
];
