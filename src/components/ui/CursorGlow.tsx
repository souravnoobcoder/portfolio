import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft accent glow that trails the pointer across the whole page — a subtle
 * "flashlight" over the dark UI. Mounts only for mouse users who haven't
 * requested reduced motion; movement is transform-only (no repaints).
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -left-72 -top-72 h-[36rem] w-[36rem] rounded-full bg-accent/[0.05] blur-[110px] will-change-transform"
      />
    </div>
  );
}
