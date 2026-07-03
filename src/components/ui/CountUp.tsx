import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  /** e.g. "4+", "12", "97%" — a leading integer animates, the rest is a suffix.
      Values with no leading number render as-is. */
  value: string;
  className?: string;
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = /^(\d+)(.*)$/.exec(value);

  useEffect(() => {
    const el = ref.current;
    if (!inView || !match || !el) return;

    const target = Number(match[1]);
    const suffix = match[2];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {match ? `0${match[2]}` : value}
    </span>
  );
}
