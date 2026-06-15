import { GraduationCap } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { education } from "../data/profile";

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading" className="py-12 sm:py-16">
      <SectionHeading
        id="education-heading"
        eyebrow="Education"
        title="Academic background"
      />

      <Reveal className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-semibold text-fg">{education.degree}</h3>
            <p className="text-sm text-muted">{education.school}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 pl-15 sm:pl-0">
          {education.detail ? (
            <span className="rounded-full border border-line-soft bg-surface-2 px-3 py-1 text-sm font-medium text-fg">
              {education.detail}
            </span>
          ) : null}
          <span className="font-mono text-xs text-faint">{education.period}</span>
        </div>
      </Reveal>
    </Section>
  );
}
