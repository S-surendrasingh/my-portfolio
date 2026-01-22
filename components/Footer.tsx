import { siteConfig } from "@/lib/site-config";
import { Container } from "./Container";
import { ScrollToTopButton } from "./ScrollToTopButton";

export function Footer() {
  const year = new Date().getFullYear();
  const displayName = siteConfig.name;

  return (
    <footer className="relative overflow-hidden border-t border-purple-500/10 bg-zinc-950/30 py-6 backdrop-blur-md sm:py-8">
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 bg-purple-900/10 blur-[100px]"
        aria-hidden="true"
      />

      <Container>
        <div
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/5 bg-zinc-900/40 px-4 py-4 text-xs text-zinc-400 backdrop-blur-sm sm:flex-row sm:px-6"
        >
          <p className="text-center sm:text-left">
            © {year} {displayName} All rights reserved.
          </p>
          <ScrollToTopButton />
        </div>
      </Container>
    </footer>
  );
}
