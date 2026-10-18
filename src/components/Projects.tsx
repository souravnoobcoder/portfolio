import type { ComponentType } from "react";
import { Check, Flame, Smartphone, Sparkles, Tablet, Tv } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";
import { AppleIcon, AndroidIcon } from "./ui/BrandIcons";
import { projects, type Project } from "../data/profile";
import { cn } from "../lib/cn";

type IconType = ComponentType<{ size?: number | string; className?: string }>;

function platformIcon(platform: string): IconType {
  if (/fire/i.test(platform)) return Flame;
  if (/ios|ipad|iphone/i.test(platform)) return AppleIcon;
  if (/android/i.test(platform)) return AndroidIcon;
  if (/tv/i.test(platform)) return Tv;
  if (/tablet/i.test(platform)) return Tablet;
  return Smartphone;
}

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[translate,border-color] duration-300 hover:-translate-y-1">
      {project.cover ? (
        <div className="relative overflow-hidden border-b border-line-soft bg-bg">
          <img
            src={project.cover}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className={cn(
              "w-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-[1.04]",
              large ? "h-32 sm:h-36" : "h-28",
            )}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
          />
        </div>
      ) : null}

      <div className={cn("flex flex-1 flex-col p-6", large && "sm:p-7")}>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.platforms.map((p) => {
            const Icon = platformIcon(p);
            return (
              <span
                key={p}
                className="inline-flex items-center gap-1 rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                <Icon size={11} className="text-muted" />
                {p}
              </span>
            );
          })}
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
              className="rounded-full border border-line-soft px-2.5 py-0.5 text-xs text-muted transition-colors duration-200 group-hover:border-accent/25"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
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
