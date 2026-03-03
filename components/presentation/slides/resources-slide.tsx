"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SlideHeading } from "../slide-heading";

const resources = [
  {
    name: "Boris Cherny",
    description: "Creator of Claude Code",
    tag: "Blog / Twitter",
    url: "https://x.com/bcherny",
  },
  {
    name: "AI Engineer",
    description:
      "Conference talks and technical deep dives on building with LLMs",
    tag: "YouTube",
    url: "https://www.youtube.com/@aiDotEngineer",
  },
  {
    name: "Simon Scrapes",
    description:
      "Practical Claude Code workflows and agentic development in the real world",
    tag: "YouTube",
    url: "https://www.youtube.com/watch?v=ZlDnsf_DOzg",
  },
  {
    name: "Lenny's Podcast",
    description:
      "Product, growth, and the intersection of AI with modern software teams",
    tag: "Podcast",
    url: "https://www.lennyspodcast.com",
  },
];

export function ResourcesSlide() {
  return (
    <div>
      <SlideHeading title="Resources" subtitle="Where to go deeper" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.2 }}
        className="grid gap-3 md:grid-cols-2"
      >
        {resources.map((r) => (
          <motion.a
            key={r.name}
            variants={fadeInUp}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-border bg-surface-raised p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                {r.name}
              </span>
              <span className="rounded-full bg-surface px-3 py-0.5 font-mono text-xs text-text-tertiary">
                {r.tag}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              {r.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
