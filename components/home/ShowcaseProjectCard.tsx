"use client";

import Image from "next/image";
import Link from "next/link";
import type { HomeShowcaseProject } from "@/lib/home-content";
import { JobCopilotScreenCarousel } from "./JobCopilotScreenCarousel";
import { ShowcaseThumbnailPlaceholder } from "./ShowcaseThumbnailPlaceholder";

const THUMB_HEIGHT = "h-44 sm:h-48";

const techPillClassName =
  "rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]";

const impactBadgeClassName =
  "mb-4 inline-block rounded-md border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] text-purple-300";

export function ShowcaseProjectCard({ project }: { project: HomeShowcaseProject }) {
  const caseStudyHref = project.caseStudyHref ?? "#contact";
  const demoHref = project.demoHref ?? "#contact";

  return (
    <article
      className="group relative flex h-full w-full flex-col rounded-3xl border border-purple-500/15 bg-zinc-900/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          {project.carouselScreens && project.carouselScreens.length > 0 ? (
            <>
              <JobCopilotScreenCarousel screens={project.carouselScreens} />
              <div
                className={`relative hidden overflow-hidden rounded-2xl border border-purple-500/10 bg-zinc-950/50 md:block ${THUMB_HEIGHT}`}
              >
                <div className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
                  <ShowcaseThumbnailPlaceholder projectId={project.id} className="h-full min-h-0" />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600/25 via-indigo-600/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </>
          ) : (
            <div
              className={`relative overflow-hidden rounded-2xl border border-purple-500/10 bg-zinc-950/50 ${THUMB_HEIGHT}`}
            >
              <div className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
                {project.thumbnailSrc ? (
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.thumbnailAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <ShowcaseThumbnailPlaceholder projectId={project.id} className="h-full min-h-0" />
                )}
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600/25 via-indigo-600/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-purple-500/10"
                aria-hidden="true"
              />
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-purple-100">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-purple-300/90">{project.subtitle}</p>

            <span className={impactBadgeClassName}>{project.impactBadge}</span>

            <ul className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <li key={badge} className={techPillClassName}>
                  {badge}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-zinc-400">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
          <Link
            href={caseStudyHref}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-purple-600 px-4 py-2.5 text-base font-medium text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(147,51,234,0.65)] hover:scale-[1.02] hover:bg-purple-500 hover:shadow-[0_0_28px_rgba(147,51,234,0.5)] active:scale-95 sm:w-auto sm:text-sm"
          >
            View Case Study
          </Link>
          <Link
            href={demoHref}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-purple-500/35 bg-white/[0.02] px-4 py-2.5 text-base font-medium text-purple-100 transition-all duration-300 hover:border-purple-400/55 hover:bg-purple-500/10 active:scale-95 sm:w-auto sm:text-sm"
          >
            Live Demo / Architecture
          </Link>
        </div>
      </div>
    </article>
  );
}
