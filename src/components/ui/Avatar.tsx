import { useState } from "react";
import { cn } from "../../lib/cn";

interface AvatarProps {
  src: string;
  name: string;
  className?: string;
}

/**
 * Profile image with a graceful fallback. If the image at `src` is missing
 * (e.g. before the real photo is dropped into /public), an initials monogram
 * is rendered instead so the layout never breaks.
 */
export function Avatar({ src, name, className }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-surface-2 font-mono text-4xl font-semibold text-accent",
          className,
        )}
        role="img"
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Portrait of ${name}`}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
