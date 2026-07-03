import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/cn";

interface MagneticProps {
  children: ReactNode;
  /** How strongly the content is pulled toward the cursor (0–1). */
  strength?: number;
  className?: string;
}

/** Wrapper that makes its child gently gravitate toward the cursor on hover. */
export function Magnetic({ children, strength = 0.22, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 });

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}
