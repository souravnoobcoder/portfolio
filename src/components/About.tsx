import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { profile, stats } from "../data/profile";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="Cross-platform mobile engineering"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I care about shipping one well-tested implementation instead of four
            divergent ones — pushing shared logic down into Kotlin Multiplatform,
            keeping UI adaptive across phone, tablet, and the 10-foot TV
            experience, and treating SDK consumers like first-class users with
            clear docs, sample apps, and backwards-compatible releases.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface p-5 sm:p-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
