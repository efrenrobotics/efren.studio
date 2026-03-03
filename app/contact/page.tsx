import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SplitLayout } from "@/components/split-layout";
import { PageHeader } from "@/components/page-header";
import { ContactLink } from "@/components/contact-link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Efren.",
};

const contacts = [
  {
    label: "Email",
    href: "mailto:hello@efren.studio",
    value: "hello@efren.studio",
  },
  {
    label: "GitHub",
    href: "https://github.com/efren",
    value: "github.com/efren",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/efren",
    value: "linkedin.com/in/efren",
  },
];

export default function Contact() {
  return (
    <section className="py-24 lg:py-32">
      <FadeIn>
        <SplitLayout
          left={
            <PageHeader
              title="Contact"
              subtitle="Let's connect."
            />
          }
          right={
            <div>
              <p className="mb-8 text-text-secondary leading-relaxed">
                I&apos;m always open to conversations about software, design,
                and interesting projects. Feel free to reach out through any of
                the channels below.
              </p>
              <div>
                {contacts.map((contact) => (
                  <ContactLink key={contact.label} {...contact} />
                ))}
              </div>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
}
