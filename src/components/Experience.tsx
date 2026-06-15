import { MapPin } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { experience } from "../data/profile";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Where I've shipped"
        description="4+ years building Android, Android TV, Fire TV, and multiplatform products — from intern to senior."
      />

      <ol className="relative border-l border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
            <span
              className={[
                "absolute -left-[6.5px] sm:-left-[8.5px] top-1.5 h-3 w-3 rounded-full ring-4 ring-bg",
                job.current ? "bg-accent" : "bg-faint",
              ].join(" ")}
              aria-hidden="true"
            />
            <Reveal delay={Math.min(i * 0.05, 0.2)}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-fg">
                  {job.role}
                  <span className="text-accent"> · {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-faint">{job.period}</span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                {job.location ? (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} aria-hidden="true" />
                    {job.location}
                  </span>
                ) : null}
                {job.employment ? <span>{job.employment}</span> : null}
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="relative pl-5 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/70"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
