"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TitleSlide() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center"
    >
      <motion.div variants={fadeInUp} className="mb-6">
        <span className="inline-block rounded-full bg-accent-muted px-4 py-1.5 font-mono text-sm text-accent">
          Agentic Development
        </span>
      </motion.div>
      <motion.h1
        variants={fadeInUp}
        className="text-6xl font-bold tracking-tight text-text-primary md:text-8xl"
      >
        Claude Code
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="mt-4 max-w-lg text-lg text-text-secondary"
      >
        How agentic AI is transforming the way we build software
      </motion.p>
      <motion.div
        variants={fadeInUp}
        className="mt-10 flex items-center gap-3"
      >
        <div className="h-8 w-8 rounded-full bg-accent font-mono text-sm font-semibold leading-8 text-surface">
          EM
        </div>
        <span className="text-sm text-text-tertiary">Efren Mendoza</span>
      </motion.div>
    </motion.div>
  );
}
