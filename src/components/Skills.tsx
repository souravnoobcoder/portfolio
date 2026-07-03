import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { SpotlightCard } from "./ui/SpotlightCard";
import { skillGroups } from "../data/profile";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Skills"
        title="The toolkit"
        description="The languages, frameworks, and platforms I reach for when building production Android and multiplatform software."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06} className="h-full">
            <SpotlightCard className="h-full rounded-2xl border border-line bg-surface p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-faint">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line-soft bg-surface-2 px-2.5 py-1 text-sm text-fg/90 transition-[translate,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
