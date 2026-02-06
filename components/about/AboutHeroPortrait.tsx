"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { IconImage } from "@/components/icons";

export function AboutHeroPortrait({
  src,
  alt,
}: {
  src: string | null;
  alt: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative flex h-full w-full items-end justify-center"
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {src ? (
        <Image
          src={`${src}?v=7`}
          alt={alt}
          width={500}
          height={539}
          priority
          unoptimized
          className="max-h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_16px_48px_rgba(0,0,0,0.4)] [mask-image:linear-gradient(to_bottom,black_62%,rgba(0,0,0,0.92)_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_62%,rgba(0,0,0,0.92)_84%,transparent_100%)]"
        />
      ) : (
        <IconImage className="text-zinc-600" width={48} height={48} />
      )}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0712] via-[#0a0712]/50 to-transparent sm:h-28"
        aria-hidden="true"
      />
    </motion.div>
  );
}
