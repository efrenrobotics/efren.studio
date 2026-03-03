"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const experience = [
  {
    role: "Software Engineer",
    team: "VAS Innovations - Agentic Development",
    company: "Visa",
    current: true,
  },
  {
    role: "Software Engineer Intern",
    team: "Android Auto - Car App Library",
    company: "Google",
  },
  {
    role: "Software Engineer Intern",
    team: "Mulesoft - Robotic Process Automation",
    company: "Salesforce",
  },
  {
    role: "Research Assistant",
    team: "Human Robot Interaction & Social Navigation",
    company: "Texas Robotics",
  },
];

const education = ["B.S. Computer Science — The University of Texas at Austin"];

const hobbies = [
  { label: "Formula One", icon: "🏎" },
  { label: "Grilling", icon: "🔥" },
  { label: "Agentic Development", icon: "⚡" },
];

export function AboutMeSlide() {
  return (
    <div className="grid items-stretch gap-10 md:grid-cols-[260px_1fr]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col   "
      >
        <div className="relative h-2/3 w-full overflow-hidden rounded-2xl border-2 border-accent p-1">
          <Image
            src="/efren.webp"
            alt="Efren Mendoza"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </motion.div>
      <div>
        <SlideHeading title="About Me" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.2 }}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Experience
            </h3>
            <div className="space-y-3">
              {experience.map((e) => (
                <div key={e.company}>
                  <div className="flex items-center gap-2">
                    <span className="text-text-primary">{e.role}</span>
                    <span className="text-text-tertiary">@</span>
                    <span className="text-accent">{e.company}</span>
                    {e.current && (
                      <span className="rounded bg-accent-muted px-2 py-0.5 font-mono text-xs text-accent">
                        current
                      </span>
                    )}
                  </div>
                  {e.team && (
                    <p className="mt-0.5 text-sm text-text-tertiary">
                      {e.team}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Education
            </h3>
            <div className="space-y-1.5">
              {education.map((e) => (
                <p key={e} className="text-text-secondary">
                  {e}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Hobbies
            </h3>
            <div className="flex gap-3">
              {hobbies.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5"
                >
                  <span>{h.icon}</span>
                  <span className="text-sm text-text-secondary">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
