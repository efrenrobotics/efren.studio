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
    date: "2024 — Present",
    title: "Software Engineer",
    subtitle: "Acme Corp",
    description:
      "Building and maintaining product interfaces with React and TypeScript. Contributing to the design system and improving developer experience across the frontend platform.",
  },
  {
    date: "2023 — 2024",
    title: "Frontend Developer",
    subtitle: "Startup Studio",
    description:
      "Developed user-facing features for early-stage products. Collaborated closely with designers to translate Figma mockups into responsive, accessible interfaces.",
  },
  {
    date: "Summer 2023",
    title: "Software Engineering Intern",
    subtitle: "Tech Company",
    description:
      "Built internal tooling and dashboards. Shipped a component library that reduced UI development time by 30%.",
  },
];

const education = [
  {
    date: "2019 — 2023",
    title: "B.S. Computer Science",
    subtitle: "University",
    description:
      "Focused on software engineering, human-computer interaction, and web technologies.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Figma",
  "Motion Design",
  "Design Systems",
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
