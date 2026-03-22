import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function CTA({
  eyebrow,
  title,
  description,
  actions,
  children,
  footer,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section className="surface-card rounded-2xl px-6 py-14 text-center sm:px-12 sm:py-16">
      <SectionHeading
        align="center"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="mx-auto"
      />
      {children && <div className="mx-auto mt-6 max-w-xl">{children}</div>}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{actions}</div>
      {footer && <div className="mt-6">{footer}</div>}
    </section>
  );
}

export function CTASection({ children }: { children: ReactNode }) {
  return <Container className="py-16 sm:py-20">{children}</Container>;
}
