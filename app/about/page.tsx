import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SplitLayout } from "@/components/split-layout";
import { PageHeader } from "@/components/page-header";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "About",
  description: "About Efren — software engineer, design-minded builder.",
};

const principles = [
  "Good software is felt before it's understood.",
  "Simplicity is the result of care, not the absence of thought.",
  "The best interfaces disappear — they let people do, not figure out.",
  "Craft compounds. Small details add up to something unmistakable.",
];

export default function About() {
  return (
    <section className="py-24 lg:py-32">
      <FadeIn>
        <SplitLayout
          left={<PageHeader title="About" />}
          right={
            <div>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m Efren — a software engineer who thinks a lot about how
                things look and feel. I got into programming because I wanted to
                build things, and I stayed because I realized software is one of
                the few mediums where design, logic, and craft all intersect.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                I&apos;m drawn to frontend engineering because it&apos;s where
                the human meets the machine. Every pixel, every interaction,
                every loading state is a chance to show someone you cared enough
                to get it right.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Outside of code, I&apos;m usually exploring design references,
                reading about typography, or thinking about what makes certain
                products feel inevitable while others feel forced.
              </p>

              <SectionDivider />

              <h2 className="text-xl font-semibold tracking-tight">
                Principles
              </h2>
              <div className="mt-6 space-y-4">
                {principles.map((principle, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="shrink-0 font-mono text-sm text-text-tertiary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-text-secondary">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
}
