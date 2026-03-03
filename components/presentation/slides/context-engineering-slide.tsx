"use client";

import { SlideHeading } from "../slide-heading";
import { SlideBulletList } from "../slide-bullet-list";
import { CodeBlock } from "../code-block";

export function ContextEngineeringSlide() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <SlideHeading
          title="Context Engineering"
          subtitle="Context > prompts — give the agent the right information"
        />
        <SlideBulletList
          items={[
            {
              label: "CLAUDE.md files",
              description:
                "Project-level instructions that persist across sessions",
            },
            {
              label: "Context hierarchy",
              description:
                "Enterprise → project → user-level instructions, layered automatically",
            },
            {
              label: "Memory system",
              description:
                "Auto-memory files that build up knowledge over time",
            },
            {
              label: "Why it matters",
              description:
                "Better context = fewer iterations, more accurate results",
            },
          ]}
        />
      </div>
      <div className="flex flex-col justify-center">
        <CodeBlock
          filename="CLAUDE.md"
          code={`# Project Instructions

## Commands
npm run dev    # Start dev server
npm run build  # Production build
npm run test   # Run tests

## Architecture
- Next.js 16 App Router
- Tailwind CSS v4
- MDX for content

## Conventions
- Use TypeScript strict mode
- Components in /components
- Prefer server components`}
        />
      </div>
    </div>
  );
}
