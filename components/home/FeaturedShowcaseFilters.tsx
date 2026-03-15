"use client";

import { useState } from "react";
import {
  HOME_SHOWCASE_PROJECTS,
  SHOWCASE_FILTER_TABS,
  type HomeShowcaseProject,
  type ShowcaseFilterId,
} from "@/lib/home-content";
import { cn } from "@/lib/cn";
import { ShowcaseProjectCard } from "./ShowcaseProjectCard";

const tabBaseClassName =
  "inline-flex min-h-11 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-purple-500/20 bg-zinc-900/80 px-5 py-2.5 text-xs font-medium text-zinc-300 transition-[color,border-color,box-shadow,transform] duration-300 hover:border-purple-500 hover:text-white active:scale-[0.98] motion-safe:hover:scale-105";

const tabActiveClassName =
  "border-purple-500/55 bg-purple-500/15 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]";

function matchesFilter(categories: HomeShowcaseProject["categories"], filter: ShowcaseFilterId) {
  if (filter === "all") return true;
  return categories.includes(filter);
}

export function FeaturedShowcaseFilters() {
  const [activeFilter, setActiveFilter] = useState<ShowcaseFilterId>("all");

  const visibleProjects = HOME_SHOWCASE_PROJECTS.filter((project) =>
    matchesFilter(project.categories, activeFilter)
  );

  return (
    <>
      <div
        className="mt-6 mb-8 flex flex-wrap justify-center gap-2 px-1 sm:px-4"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {SHOWCASE_FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(tab.id)}
              className={cn(tabBaseClassName, isActive && tabActiveClassName)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
        {visibleProjects.map((project) => (
          <div key={project.id} className="flex h-full min-h-0">
            <ShowcaseProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
