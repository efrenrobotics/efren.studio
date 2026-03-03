"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const tools = [
  { name: "Read", desc: "Read files from the filesystem" },
  { name: "Edit", desc: "Exact string replacements in files" },
  { name: "Write", desc: "Create new files" },
  { name: "Bash", desc: "Execute shell commands" },
  { name: "Grep", desc: "Search file contents with regex" },
  { name: "Glob", desc: "Find files by pattern" },
  { name: "Agent", desc: "Launch specialized subagents" },
  { name: "WebSearch", desc: "Search the web for info" },
];

const permissions = [
  { level: "Auto-allow", desc: "Read-only tools run freely" },
  { level: "Ask", desc: "File edits require approval" },
  { level: "Deny", desc: "Block specific operations" },
];

export function ToolCallingSlide() {
  return (
    <div>
      <SlideHeading
        title="Tool Calling"
        subtitle="How Claude Code interacts with your codebase"
      />
      <div className="grid gap-8 md:grid-cols-[1fr_280px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.2 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={fadeInUp}
              className="rounded-lg border border-border bg-surface-raised p-3"
            >
              <span className="font-mono text-sm text-accent">
                {tool.name}
              </span>
              <p className="mt-1 text-xs text-text-tertiary">{tool.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Permission Model
          </h3>
          <div className="space-y-2">
            {permissions.map((p) => (
              <div
                key={p.level}
                className="rounded-lg border border-border px-3 py-2"
              >
                <span className="font-mono text-sm text-text-primary">
                  {p.level}
                </span>
                <p className="text-xs text-text-tertiary">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
