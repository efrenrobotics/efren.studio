"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

export function SlideHeading({
  title,
  subtitle,
  size = "lg",
}: {
  title: string;
  subtitle?: string;
  size?: "lg" | "xl";
}) {
  return (
    <div className="mb-10">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className={`font-semibold text-text-primary ${
          size === "xl" ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-3 text-lg text-text-secondary"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
