"use client";

import { motion } from "motion/react";
import { scaleIn } from "@/lib/animations";

export function CodeBlock({
  code,
  filename,
  delay = 0.3,
}: {
  code: string;
  filename?: string;
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
      {filename && (
        <div className="border-b border-border bg-surface-raised px-4 py-2">
          <span className="font-mono text-xs text-text-tertiary">
            {filename}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-surface-raised p-5">
        <code className="font-mono text-sm leading-relaxed text-text-secondary">
          {code}
        </code>
      </pre>
    </motion.div>
  );
}
