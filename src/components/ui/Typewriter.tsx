import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

interface TypewriterProps {
  lines: readonly string[];
  className?: string;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}

/** Types each line out, holds, deletes, and moves to the next — forever. */
export function Typewriter({
  lines,
  className,
  typeMs = 42,
  deleteMs = 20,
  holdMs = 2400,
}: TypewriterProps) {
  const reduced = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const line = lines[lineIdx % lines.length];

  useEffect(() => {
    if (reduced) return;

    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && chars === line.length) delay = holdMs;

    const timer = setTimeout(() => {
      if (!deleting && chars === line.length) {
        setDeleting(true);
      } else if (deleting && chars === 0) {
        setDeleting(false);
        setLineIdx((i) => (i + 1) % lines.length);
      } else {
        setChars((c) => c + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [reduced, chars, deleting, line, lines.length, typeMs, deleteMs, holdMs]);

  if (reduced) {
    return <span className={className}>{lines[0]}</span>;
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span aria-live="off">{line.slice(0, chars)}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-caret rounded-sm bg-accent"
      />
    </span>
  );
}
