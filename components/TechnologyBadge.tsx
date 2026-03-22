import { cn } from "@/lib/cn";

export function TechnologyBadge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "inverse";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3 py-1.5 font-mono text-[13px]",
        tone === "inverse"
          ? "border-ink-border bg-ink-soft text-white/80"
          : "border-border bg-surface text-foreground/80"
      )}
    >
      {children}
    </span>
  );
}
