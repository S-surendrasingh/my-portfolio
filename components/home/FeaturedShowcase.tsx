import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";
import { FeaturedShowcaseFilters } from "./FeaturedShowcaseFilters";
import { FeaturedShowcaseHeader } from "./FeaturedShowcaseHeader";

export function FeaturedShowcase() {
  return (
    <section
      id="projects"
      className={cn(
        "relative scroll-mt-28 overflow-hidden px-4 pt-8 pb-8 sm:px-8 sm:pt-12 sm:pb-10"
      )}
    >
      <div
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-64 w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]"
        aria-hidden="true"
      />
      <Container>
        <FeaturedShowcaseHeader />
        <FeaturedShowcaseFilters />
      </Container>
    </section>
  );
}
