import { marqueeSkills } from "../data/profile";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {marqueeSkills.map((skill) => (
        <li
          key={skill}
          className="flex items-center gap-6 pr-6 font-mono text-sm text-faint transition-colors hover:text-accent"
        >
          {skill}
          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-accent/40"
          />
        </li>
      ))}
    </ul>
  );
}

/** Full-bleed scrolling strip of core technologies; pauses on hover. */
export function TechMarquee() {
  return (
    <div
      aria-label="Core technologies"
      className="group relative border-y border-line-soft bg-surface/40 py-5"
    >
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  );
}
