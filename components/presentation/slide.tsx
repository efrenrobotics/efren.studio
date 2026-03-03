"use client";

import { motion } from "motion/react";
import { slideTransition } from "@/lib/animations";

export function Slide({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: number;
}) {
  return (
    <motion.div
      custom={direction}
      variants={slideTransition}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center px-12 md:px-24"
    >
      <div className="w-full max-w-[1100px]">{children}</div>
    </motion.div>
  );
}
