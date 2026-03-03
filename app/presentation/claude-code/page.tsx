import type { Metadata } from "next";
import { Presentation } from "@/components/presentation/presentation";

export const metadata: Metadata = {
  title: "Claude Code & Agentic Development",
};

export default function ClaudeCodePresentationPage() {
  return <Presentation />;
}
