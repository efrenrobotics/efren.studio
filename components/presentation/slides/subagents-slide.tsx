"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const agents = [
  {
    name: "Explore",
    desc: "Fast codebase exploration — find files, search code, answer architecture questions",
    color: "text-green-400",
  },
  {
    name: "Plan",
    desc: "Design implementation strategies, identify critical files, consider trade-offs",
    color: "text-blue-400",
  },
  {
    name: "General-purpose",
    desc: "Research complex questions, execute multi-step tasks autonomously",
    color: "text-purple-400",
  },
];

export function SubagentsSlide() {
  return (
    <div>
      <SlideHeading
        title="Subagents"
        subtitle="Parallel execution for complex tasks"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.2 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {agents.map((agent) => (
          <motion.div
            key={agent.name}
            variants={fadeInUp}
            className="rounded-xl border border-border bg-surface-raised p-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className={`font-mono text-lg font-semibold ${agent.color}`}>
                {agent.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              {agent.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex items-center gap-3 rounded-lg border border-border px-4 py-3"
      >
        <span className="font-mono text-xs text-accent">Worktree isolation</span>
        <span className="text-sm text-text-tertiary">
          Each agent can work in an isolated git worktree — no conflicts, parallel branches
        </span>
      </motion.div>
    </div>
  );
}
