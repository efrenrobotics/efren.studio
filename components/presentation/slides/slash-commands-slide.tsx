"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const builtIn = [
  { cmd: "/help", desc: "Get help and see available commands" },
  { cmd: "/clear", desc: "Clear conversation context" },
  { cmd: "/compact", desc: "Compress conversation to save context" },
  { cmd: "/model", desc: "Switch between Claude models" },
];

const skills = [
  { name: "commit", desc: "Smart git commits with context" },
  { name: "review-pr", desc: "Review pull requests" },
  { name: "frontend-design", desc: "Premium UI generation" },
  { name: "find-skills", desc: "Discover community skills" },
];

export function SlashCommandsSlide() {
  return (
    <div>
      <SlideHeading
        title="Slash Commands & Skills"
        subtitle="Built-in commands and an extensible skill ecosystem"
      />
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.2 }}
        >
          <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Built-in Commands
          </h3>
          <div className="space-y-2">
            {builtIn.map((item) => (
              <motion.div
                key={item.cmd}
                variants={fadeInUp}
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-2.5"
              >
                <code className="font-mono text-sm text-accent">
                  {item.cmd}
                </code>
                <span className="text-sm text-text-tertiary">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.35 }}
        >
          <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Installable Skills
          </h3>
          <div className="space-y-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-raised px-4 py-2.5"
              >
                <span className="rounded-full bg-accent-muted px-3 py-0.5 font-mono text-xs text-accent">
                  {skill.name}
                </span>
                <span className="text-sm text-text-tertiary">
                  {skill.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
