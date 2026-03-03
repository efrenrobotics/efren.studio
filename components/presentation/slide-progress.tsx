"use client";

import { motion } from "motion/react";

export function SlideProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-8 pb-6">
        <span className="font-mono text-xs text-text-tertiary">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs text-text-tertiary">
          ← → navigate · esc exit
        </span>
      </div>
      <div className="h-[2px] w-full bg-border">
        <motion.div
          className="h-full bg-accent"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
