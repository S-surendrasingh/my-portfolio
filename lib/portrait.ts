import fs from "node:fs";
import path from "node:path";

const PORTRAIT_IMAGE_CANDIDATES = [
  "/images/surendra-profile-hero.png",
  "/images/surendra-profile.png",
  "/images/surendra-profile.jpg",
  "/images/surendra-profile.jpeg",
];

function resolvePortrait(candidates: string[]): string | null {
  for (const candidate of candidates) {
    const absolutePath = path.join(process.cwd(), "public", candidate);
    if (fs.existsSync(absolutePath)) return candidate;
  }
  return null;
}

/** Hero uses hero-specific cutout first (casual / transparent PNG). */
export function getHeroPortraitSrc(): string | null {
  return resolvePortrait(PORTRAIT_IMAGE_CANDIDATES);
}

/** About and other pages — same search order. */
export function getPortraitSrc(): string | null {
  return resolvePortrait(PORTRAIT_IMAGE_CANDIDATES);
}
