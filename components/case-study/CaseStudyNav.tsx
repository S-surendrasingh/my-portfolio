"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type NavItem = { id: string; label: string };

export function CaseStudyNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav aria-label="On this page" className="hidden lg:block">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">On This Page</p>
        <ul className="mt-4 flex flex-col gap-0.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                  active === item.id
                    ? "border-accent font-medium text-accent"
                    : "border-border text-muted hover:border-border-strong hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="On this page"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:hidden"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
