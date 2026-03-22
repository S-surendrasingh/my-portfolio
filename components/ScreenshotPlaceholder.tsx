import { cn } from "@/lib/cn";
import { IconImage } from "./icons";

export function ScreenshotPlaceholder({
  label = "Screenshot placeholder",
  aspect = "aspect-[16/10]",
  tone = "default",
  className,
}: {
  label?: string;
  aspect?: string;
  tone?: "default" | "inverse";
  className?: string;
}) {
  const isInverse = tone === "inverse";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl border",
        isInverse ? "border-ink-border bg-ink-soft" : "border-border bg-accent-soft",
        aspect,
        className
      )}
    >
      <IconImage className={isInverse ? "text-white/30" : "text-accent/50"} width={28} height={28} />
      <span
        className={cn(
          "px-6 text-center font-mono text-xs uppercase tracking-wider",
          isInverse ? "text-white/40" : "text-muted"
        )}
      >
        {label}
      </span>
    </div>
  );
}
