import type { ReactNode } from "react";
import { IconBolt, IconSparkles } from "@/components/icons";

const PLACEHOLDER_ICONS: Record<string, ReactNode> = {
  "job-copilot": <IconSparkles className="h-14 w-14 text-violet-400/90" width={56} height={56} />,
  "voice-conversion": <IconBolt className="h-14 w-14 text-violet-400/90" width={56} height={56} />,
};

export function ShowcaseThumbnailPlaceholder({
  projectId,
  className = "",
}: {
  projectId: string;
  className?: string;
}) {
  const icon = PLACEHOLDER_ICONS[projectId] ?? (
    <IconSparkles className="h-14 w-14 text-violet-400/90" width={56} height={56} />
  );

  return (
    <div className={`relative overflow-hidden bg-[#0a0a0c] ${className || "aspect-[16/10]"}`}>
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(139, 92, 246, 0.45) 0px, transparent 55%),
            radial-gradient(at 80% 20%, rgba(124, 58, 237, 0.35) 0px, transparent 50%),
            radial-gradient(at 60% 85%, rgba(91, 33, 182, 0.4) 0px, transparent 55%),
            radial-gradient(at 10% 90%, rgba(167, 139, 250, 0.2) 0px, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,24,27,0.2)_0%,rgba(9,9,11,0.85)_100%)]"
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
        {icon}
      </div>
    </div>
  );
}
