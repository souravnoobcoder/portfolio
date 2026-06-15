import { ArrowUpRight, Scale, Github } from "lucide-react";
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
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
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
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-faint transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-soft px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
                {item.license ? (
                  <span className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-faint">
                    <Scale size={12} aria-hidden="true" />
                    {item.license}
                  </span>
                ) : null}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
