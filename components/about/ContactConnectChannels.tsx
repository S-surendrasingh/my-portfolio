"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { IconArrowUpRight } from "@/components/icons";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, UPWORK_PROFILE_URL } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const CHANNELS: {
  Icon: IconType;
  label: string;
  description: string;
  href: string | null;
  floatDelay: string;
}[] = [
  {
    Icon: FaGithub,
    label: "GitHub",
    description: "Explore my code and contributions",
    href: GITHUB_PROFILE_URL,
    floatDelay: "0s",
  },
  {
    Icon: SiUpwork,
    label: "Upwork",
    description: "View my freelance profile and reviews",
    href: UPWORK_PROFILE_URL,
    floatDelay: "0.35s",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    description: "Connect with me professionally",
    href: LINKEDIN_PROFILE_URL,
    floatDelay: "0.7s",
  },
];

const cardClassName =
  "group flex min-h-[4.5rem] touch-manipulation items-center gap-4 rounded-2xl border border-purple-500/15 bg-zinc-900/80 p-4 backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 active:scale-[0.99] motion-safe:hover:translate-x-2 motion-safe:hover:border-purple-500/60 motion-safe:hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]";

const iconWrapClassName =
  "rounded-2xl border border-purple-500/30 bg-purple-500/10 p-3 text-purple-300 transition-all duration-300 group-hover:scale-110";

function ConnectCard({
  Icon,
  label,
  description,
  href,
  floatDelay,
  reduceMotion,
}: {
  Icon: IconType;
  label: string;
  description: string;
  href: string | null;
  floatDelay: string;
  reduceMotion: boolean;
}) {
  const inner = (
    <>
      <span
        className={cn(iconWrapClassName, !reduceMotion && "animate-float-gentle")}
        style={reduceMotion ? undefined : { animationDelay: floatDelay }}
      >
        <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1 text-left">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-zinc-300">{description}</p>
      </div>
      {href ? (
        <IconArrowUpRight
          className="shrink-0 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-300"
          width={18}
          height={18}
        />
      ) : null}
    </>
  );

  if (!href) {
    return <div className={`${cardClassName} opacity-60`}>{inner}</div>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
      {inner}
    </a>
  );
}

export function ContactConnectChannels() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div className="mt-6 flex flex-col gap-3">
      {CHANNELS.map((channel) => (
        <ConnectCard key={channel.label} {...channel} reduceMotion={reduceMotion} />
      ))}
    </div>
  );
}
