import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
}) {
  const isInverse = tone === "inverse";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            isInverse ? "text-white/60" : "text-[#8B5CF6]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
          isInverse ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-7",
            isInverse ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
