import { useRef, type HTMLAttributes, type MouseEvent } from "react";
import { cn } from "../../lib/cn";

/**
 * Card whose glow + lit border segment follow the cursor (see .spotlight-card
 * in index.css). Coordinates are written straight to CSS vars on the element,
 * so mouse movement never re-renders React.
 */
export function SpotlightCard({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn("spotlight-card", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
