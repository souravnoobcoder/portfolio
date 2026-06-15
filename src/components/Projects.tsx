import { Check, Sparkles } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { projects, type Project } from "../data/profile";
import { cn } from "../lib/cn";

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40",
        large && "sm:p-7",
      )}
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.platforms.map((p) => (
          <span
            key={p}
            className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {p}
          </span>
        ))}
      </div>

      <h3
        className={cn(
          "font-semibold tracking-tight text-fg",
          large ? "text-xl" : "text-lg",
        )}
      >
        {project.featured ? (
          <Sparkles
            size={15}
            className="mr-1.5 inline align-[-2px] text-accent"
            aria-hidden="true"
          />
        ) : null}
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-fg/85">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-line-soft pt-4">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line-soft px-2.5 py-0.5 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="Selected Work"
        title="Things I've built"
        description="Client and partner names are kept private — these describe the engineering and the impact."
      />

      {featured.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <ProjectCard project={p} large />
            </Reveal>
          ))}
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
