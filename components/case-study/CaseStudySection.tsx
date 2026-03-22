import type { ReactNode } from "react";

export function CaseStudySection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-14">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{heading}</h2>
      <div className="mt-4 max-w-3xl">{children}</div>
    </section>
  );
}
