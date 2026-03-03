"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const contacts = [
  { label: "Email", display: "emefrenmendo@gmail.com", href: "mailto:emefrenmendo@gmail.com" },
  { label: "LinkedIn", display: "linkedin.com/in/emefren", href: "https://www.linkedin.com/in/emefren/" },
];

export function ThankYouSlide() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-5xl font-bold text-text-primary md:text-7xl"
      >
        Thank You
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="mt-4 text-xl text-text-secondary"
      >
        Questions?
      </motion.p>
      <motion.div
        variants={fadeInUp}
        className="mt-10 flex items-center gap-4"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-mono text-lg font-semibold text-surface">
          EM
        </div>
        <div className="text-left">
          <p className="font-medium text-text-primary">Efren Mendoza</p>
          <p className="text-sm text-text-tertiary">efren.studio</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className="mt-8 flex gap-3"
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5 transition-colors hover:border-accent hover:text-accent"
          >
            <span className="font-mono text-xs text-text-tertiary">{c.label}</span>
            <span className="font-mono text-xs text-text-secondary">{c.display}</span>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
