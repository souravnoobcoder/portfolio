import { ArrowUpRight, ExternalLink, Scale, Github } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { openSource } from "../data/profile";

export function OpenSource() {
  return (
    <Section id="open-source" labelledBy="open-source-heading">
      <SectionHeading
        id="open-source-heading"
        eyebrow="Open Source"
        title="Side projects & libraries"
        description="Tools and libraries I've published — distilled from real production work."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {openSource.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.08} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface-2 text-fg">
                    <Github size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-fg">{item.name}</h3>
                    <p className="font-mono text-xs text-faint">{item.repo}</p>
                  </div>
                </div>
                {item.license ? (
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-faint">
                    <Scale size={12} aria-hidden="true" />
                    {item.license}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-soft px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-line-soft pt-4">
                {item.demo ? (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-lg accent-gradient px-3.5 py-2 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    Live demo
                  </a>
                ) : null}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-3.5 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Github size={15} aria-hidden="true" />
                  GitHub
                  <ArrowUpRight
                    size={14}
                    className="text-faint transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
