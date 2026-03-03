"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const practices = [
  {
    title: "Team Standards",
    desc: "Shared conventions, coding standards, and review criteria baked into CLAUDE.md",
  },
  {
    title: "Shared CLAUDE.md",
    desc: "Enterprise and project-level instructions that every team member's agent follows",
  },
  {
    title: "Skill Libraries",
    desc: "Custom skills shared across the team — consistent patterns, reusable workflows",
  },
];

export function CompoundEngineeringSlide() {
  return (
    <div>
      <SlideHeading title="Compound Engineering" />
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-8 max-w-2xl text-text-secondary"
      >
        <span className="text-text-primary font-medium">
          &ldquo;Workflows are individual&rdquo;
        </span>{" "}
        — but compound engineering scales them across teams. The goal: make every
        engineer&apos;s agent as effective as your best engineer.
      </motion.p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.3 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {practices.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeInUp}
            className="rounded-xl border border-border bg-surface-raised p-6"
          >
            <span className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-text-primary">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
