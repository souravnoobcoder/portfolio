import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { experience } from "../data/profile";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.5,
  });

  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Where I've shipped"
        description="4+ years building Android, Android TV, Fire TV, and multiplatform products — from intern to senior."
      />

      <ol ref={listRef} className="relative">
        {/* Timeline rail + accent line that draws itself as you scroll */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-1 top-2 w-[2px] rounded-full bg-line"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute bottom-2 left-1 top-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
        />

        {experience.map((job, i) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
          >
            <span
              className="absolute left-[5px] top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center"
              aria-hidden="true"
            >
              {job.current ? (
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent/50" />
              ) : null}
              <span
                className={[
                  "relative h-3 w-3 rounded-full ring-4 ring-bg",
                  job.current ? "bg-accent" : "bg-faint",
                ].join(" ")}
              />
            </span>
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
