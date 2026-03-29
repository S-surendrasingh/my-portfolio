"use client";

const shellClassName =
  "mx-auto mb-4 max-w-4xl px-1 text-center text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl";

const highlightClassName =
  "bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 bg-clip-text font-extrabold text-transparent";

export function ContactSectionHeading() {
  return (
    <h2 className={shellClassName}>
      <span className="text-white">Need a </span>
      <span className={highlightClassName}>Senior Full-Stack & AI Engineer</span>
      <span className="text-white"> to scale your product?</span>
    </h2>
  );
}
