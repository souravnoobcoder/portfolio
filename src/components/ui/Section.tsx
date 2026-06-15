import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** id of the heading that names this region (for the landmark). */
  labelledBy?: string;
}

/** Consistent vertical rhythm + max-width container for every page section. */
export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
