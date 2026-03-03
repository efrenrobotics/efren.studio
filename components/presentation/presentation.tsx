"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { Slide } from "./slide";
import { SlideProgress } from "./slide-progress";

import { TitleSlide } from "./slides/title-slide";
import { AgendaSlide } from "./slides/agenda-slide";
import { AboutMeSlide } from "./slides/about-me-slide";
import { WhatIsClaudeCodeSlide } from "./slides/what-is-claude-code-slide";
import { ContextEngineeringSlide } from "./slides/context-engineering-slide";
import { ToolCallingSlide } from "./slides/tool-calling-slide";
import { SubagentsSlide } from "./slides/subagents-slide";
import { SlashCommandsSlide } from "./slides/slash-commands-slide";
import { AgenticWorkflowSlide } from "./slides/agentic-workflow-slide";
import { CompoundEngineeringSlide } from "./slides/compound-engineering-slide";
import { ResourcesSlide } from "./slides/resources-slide";
import { ThankYouSlide } from "./slides/thank-you-slide";

const slides = [
  TitleSlide,
  AgendaSlide,
  AboutMeSlide,
  WhatIsClaudeCodeSlide,
  ContextEngineeringSlide,
  ToolCallingSlide,
  SubagentsSlide,
  SlashCommandsSlide,
  AgenticWorkflowSlide,
  CompoundEngineeringSlide,
  ResourcesSlide,
  ThankYouSlide,
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const router = useRouter();

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        router.push("/");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, router]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-surface">
      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide key={currentSlide} direction={direction}>
            <CurrentSlideComponent />
          </Slide>
        </AnimatePresence>
        <SlideProgress current={currentSlide} total={slides.length} />
      </div>
    </div>
  );
}
