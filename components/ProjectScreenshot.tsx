import Image from "next/image";
import { cn } from "@/lib/cn";
import { ScreenshotPlaceholder } from "./ScreenshotPlaceholder";

export function ProjectScreenshot({
  src,
  alt,
  aspect = "aspect-[3/2]",
  tone = "default",
  priority = false,
  sizes = "(min-width: 1024px) 640px, 100vw",
  placeholderLabel,
  className,
}: {
  src: string | null;
  alt: string;
  aspect?: string;
  tone?: "default" | "inverse";
  priority?: boolean;
  sizes?: string;
  placeholderLabel?: string;
  className?: string;
}) {
  if (!src) {
    return (
      <ScreenshotPlaceholder
        label={placeholderLabel}
        aspect={aspect}
        tone={tone}
        className={className}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border",
        tone === "inverse" ? "border-ink-border bg-ink-soft" : "border-border bg-surface-muted",
        aspect,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover"
      />
    </div>
  );
}
