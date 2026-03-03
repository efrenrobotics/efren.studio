"use client";

import { SlideHeading } from "../slide-heading";
import { SlideBulletList } from "../slide-bullet-list";
import { TerminalMock } from "../terminal-mock";

export function WhatIsClaudeCodeSlide() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <SlideHeading
          title="What is Claude Code?"
          subtitle="Anthropic's agentic coding tool — not just autocomplete"
        />
        <SlideBulletList
          items={[
            {
              label: "Agentic CLI",
              description:
                "Runs in your terminal, understands your entire codebase",
            },
            {
              label: "Multi-step reasoning",
              description:
                "Plans, executes, and verifies — like a senior engineer",
            },
            {
              label: "Tool use",
              description:
                "Reads, writes, searches, and runs commands autonomously",
            },
            {
              label: "Context-aware",
              description:
                "Understands project structure, dependencies, and conventions",
            },
          ]}
        />
      </div>
      <div className="flex flex-col justify-center">
        <TerminalMock title="claude">
          <div className="space-y-1">
            <p>
              <span className="text-accent">$</span> claude
            </p>
            <p className="text-text-tertiary">
              ╭─────────────────────────────────╮
            </p>
            <p className="text-text-tertiary">
              │ Welcome to Claude Code          │
            </p>
            <p className="text-text-tertiary">
              │ /help for commands               │
            </p>
            <p className="text-text-tertiary">
              ╰─────────────────────────────────╯
            </p>
            <p className="mt-2">
              <span className="text-accent">&gt;</span>{" "}
              <span className="text-text-primary">
                Add auth to my Next.js app
              </span>
            </p>
          </div>
        </TerminalMock>
      </div>
    </div>
  );
}
