"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const items = [
  { num: "01", title: "About Me" },
  { num: "02", title: "What is Claude Code?" },
  { num: "03", title: "Context Engineering" },
  { num: "04", title: "Tool Calling" },
  { num: "05", title: "Subagents" },
  { num: "06", title: "Slash Commands & Skills" },
  { num: "07", title: "Agentic Development Workflow" },
  { num: "08", title: "Compound Engineering" },
  { num: "09", title: "Resources" },
];

export function AgendaSlide() {
  return (
    <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
      <div>
        <SlideHeading title="Agenda" subtitle="What we'll cover today" />
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-text-secondary"
        >
          A practical look at Claude Code and how agentic workflows are changing
          the way engineers build software.
        </motion.p>
      </div>
      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.2 }}
        className="space-y-2"
      >
        {items.map((item) => (
          <motion.li
            key={item.num}
            variants={fadeInUp}
            className="flex items-center gap-4 rounded-lg border border-border px-4 py-2.5"
          >
            <span className="font-mono text-xs text-text-tertiary">
              {item.num}
            </span>
            <span className="text-sm text-text-primary">{item.title}</span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
