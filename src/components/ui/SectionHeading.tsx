import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** id applied to the h2 so the parent Section can reference it as a label. */
  id?: string;
}

/** Shared heading block: mono eyebrow + large title + optional description. */
export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-7 bg-accent/60" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
