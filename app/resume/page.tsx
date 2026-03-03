import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SplitLayout } from "@/components/split-layout";
import { PageHeader } from "@/components/page-header";
import { SectionDivider } from "@/components/section-divider";
import { TimelineItem } from "@/components/timeline-item";
import { SkillTag } from "@/components/skill-tag";

export const metadata: Metadata = {
  title: "Resume",
  description: "Efren's experience, education, and technical skills.",
};

const experience = [
  {
    date: "2025 — Present",
    title: "Software Engineer",
    subtitle: "Visa — VAS Innovations, Agentic Development",
    description:
      "Creating a platform for Technical Documentation at Visa. Building agentic development tooling and AI-powered workflows within Visa's value-added services platform.",
  },
  {
    date: "Summer 2023",
    title: "Software Engineer Intern",
    subtitle: "Google — Android Auto, Car App Library",
    description:
      "Contributed to the Android Auto Car App Library, improving developer APIs for in-car applications.",
  },
  {
    date: "Summer 2022",
    title: "Software Engineer Intern",
    subtitle: "Salesforce — Mulesoft, Robotic Process Automation",
    description: "Worked on a AI-native recipe generator",
  },
  {
    date: "Fall 2022 — Fall 2024",
    title: "Research Assistant",
    subtitle: "Texas Robotics — Human Robot Interaction & Social Navigation",
    description:
      "Conducted research on human-robot interaction and social navigation at the University of Texas at Austin.",
  },
];

const education = [
  {
    date: "2021 — 2025",
    title: "B.S. Computer Science",
    subtitle: "The University of Texas at Austin",
    description:
      "Focused on software engineering, human-robot interaction, and web technologies.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Astro",
  "Kotlin",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Motion Design",
  "Design Systems",
  "Claude Code",
];

export default function Resume() {
  return (
    <section className="py-24 lg:py-32">
      <FadeIn>
        <SplitLayout
          left={<PageHeader title="Resume" />}
          right={
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Experience
              </h2>
              <div className="mt-4">
                {experience.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>

              <SectionDivider />

              <h2 className="text-xl font-semibold tracking-tight">
                Education
              </h2>
              <div className="mt-4">
                {education.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>

              <SectionDivider />

              <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
}
