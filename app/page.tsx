import { FadeIn } from "@/components/fade-in";
import { SplitLayout } from "@/components/split-layout";

export default function Home() {
  return (
    <section className="py-24 lg:py-32">
      <FadeIn>
        <SplitLayout
          left={
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Efren Mendoza Enriquez
              </h1>
              <p className="mt-1 font-mono text-sm text-text-secondary">
                Software Engineer
              </p>
              <p className="mt-1 font-mono text-sm text-text-tertiary">
                Austin, TX
              </p>
            </div>
          }
          right={
            <div>
              <p className="text-text-secondary leading-relaxed">
                I build thoughtful, well-crafted software with an eye for design
                and a bias toward simplicity. I care about the details that make
                products feel right — the interactions, the typography, the
                moments of delight that most people never notice but everyone
                feels.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Currently focused on frontend engineering, design systems, and
                the craft of turning complex ideas into clean, intuitive
                interfaces.
              </p>

              <div className="mt-12">
                <h2 className="font-mono text-sm text-text-tertiary">
                  Currently
                </h2>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3">
                    <span className="shrink-0 font-mono text-sm text-text-tertiary">
                      Building
                    </span>
                    <span className="text-text-secondary">
                      Design systems and product interfaces
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-mono text-sm text-text-tertiary">
                      Reading
                    </span>
                    <span className="text-text-secondary">
                      Refactoring UI by Adam Wathan & Steve Schoger
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-mono text-sm text-text-tertiary">
                      Exploring
                    </span>
                    <span className="text-text-secondary">
                      Motion design and creative coding
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
}
