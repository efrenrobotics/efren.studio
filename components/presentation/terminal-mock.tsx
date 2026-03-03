"use client";

import { motion } from "motion/react";
import { scaleIn } from "@/lib/animations";

export function TerminalMock({
  title = "Terminal",
  children,
  delay = 0.3,
}: {
  title?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className="overflow-hidden rounded-lg border border-border"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-text-tertiary">
          {title}
        </span>
      </div>
      <div className="bg-surface p-5 font-mono text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </motion.div>
  );
}
