"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const steps = [
  {
    step: "01",
    title: "Plan",
    desc: "Understand the task, explore the codebase, design the approach",
    icon: "?",
  },
  {
    step: "02",
    title: "Execute",
    desc: "Write code, run commands, make changes across files",
    icon: ">",
  },
  {
    step: "03",
    title: "Verify",
    desc: "Run tests, check builds, validate the implementation",
    icon: "!",
  },
];

export function AgenticWorkflowSlide() {
  return (
    <div>
      <SlideHeading
        title="Agentic Development Workflow"
        subtitle="Plan, execute, verify — the agentic loop"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.2 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            variants={fadeInUp}
            className="relative rounded-xl border border-border bg-surface-raised p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted font-mono text-lg text-accent">
                {s.icon}
              </span>
              <div>
                <span className="font-mono text-xs text-text-tertiary">
                  {s.step}
                </span>
                <h3 className="text-xl font-semibold text-text-primary">
                  {s.title}
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              {s.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden text-text-tertiary md:block">
                →
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 flex items-stretch gap-px overflow-hidden rounded-xl border border-border"
      >
        <div className="flex flex-1 items-center gap-3 bg-surface-raised px-5 py-3">
          <code className="rounded bg-accent-muted px-2 py-0.5 font-mono text-xs text-accent">
            /plan
          </code>
          <div>
            <span className="font-mono text-sm text-text-primary">Opus</span>
            <span className="ml-2 text-sm text-text-tertiary">
              complex reasoning &amp; architectural decisions
            </span>
          </div>
        </div>
        <div className="w-px bg-border" />
        <div className="flex flex-1 items-center gap-3 bg-surface-raised px-5 py-3">
          <code className="rounded bg-surface px-2 py-0.5 font-mono text-xs text-text-tertiary">
            impl
          </code>
          <div>
            <span className="font-mono text-sm text-text-primary">Sonnet</span>
            <span className="ml-2 text-sm text-text-tertiary">
              implementation &amp; execution
            </span>
          </div>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 text-center text-xs text-text-tertiary"
      >
        Real example: this entire presentation was built using this workflow
      </motion.p>
    </div>
  );
}
