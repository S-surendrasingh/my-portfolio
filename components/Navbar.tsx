"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Container } from "./Container";

const SECTION_IDS: readonly string[] = siteConfig.nav.map((item) => item.sectionId);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const pathname = usePathname();
  const displayName = siteConfig.name.replace(/\.$/, "");
  const onAboutPage = pathname === "/about";

  useEffect(() => {
    if (!onAboutPage) return;

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && SECTION_IDS.includes(hash as (typeof siteConfig.nav)[number]["sectionId"])) {
        setActiveSection(hash);
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);

    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return () => window.removeEventListener("hashchange", syncHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.15, 0.35] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("hashchange", syncHash);
      observer.disconnect();
    };
  }, [onAboutPage]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isNavActive = (sectionId: string) => onAboutPage && activeSection === sectionId;

  const scrollToSection = (sectionId: string) => {
    setOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.history.pushState(null, "", `/about#${sectionId}`);
    setActiveSection(sectionId);
  };

  const handleSectionNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (!onAboutPage) return;
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 overflow-x-hidden border-b border-purple-500/10 bg-zinc-950/80 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between py-3 sm:py-4 md:py-5">
        <Link
          href="/about#about"
          className="text-base font-bold tracking-tight text-foreground sm:text-lg"
          onClick={(event) => handleSectionNavClick(event, "about")}
        >
          {displayName}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-9" aria-label="Primary">
            {siteConfig.nav.map((item) => {
              const active = isNavActive(item.sectionId);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleSectionNavClick(event, item.sectionId)}
                  className={cn(
                    "relative pb-1.5 text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/about#contact"
            onClick={(event) => handleSectionNavClick(event, "contact")}
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)] transition-transform hover:scale-125"
            aria-label="Contact"
          />
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-zinc-900/60 p-2.5 text-foreground transition-colors hover:border-purple-500/40 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-purple-500/15 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-2 py-4">
              {siteConfig.nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    onClick={(event) => handleSectionNavClick(event, item.sectionId)}
                    className={cn(
                      "flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-medium transition-colors active:bg-white/[0.06]",
                      isNavActive(item.sectionId)
                        ? "bg-purple-500/10 text-purple-200 ring-1 ring-purple-500/30"
                        : "text-zinc-300 hover:bg-white/[0.04]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="mt-2 pt-2"
              >
                <Button
                  href="/about#contact"
                  className="min-h-12 w-full text-base"
                  arrow="right"
                  onClick={(event) => {
                    if (onAboutPage) {
                      event.preventDefault();
                      scrollToSection("contact");
                    } else {
                      setOpen(false);
                    }
                  }}
                >
                  Contact
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
