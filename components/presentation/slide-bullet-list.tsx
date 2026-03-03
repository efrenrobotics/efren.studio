"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function SlideBulletList({
  items,
  delay = 0.2,
}: {
  items: { label: string; description?: string }[];
  delay?: number;
}) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
      className="space-y-4"
    >
      {items.map((item) => (
        <motion.li key={item.label} variants={fadeInUp} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <div>
            <span className="text-lg text-text-primary">{item.label}</span>
            {item.description && (
              <p className="mt-0.5 text-sm text-text-secondary">
                {item.description}
              </p>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
