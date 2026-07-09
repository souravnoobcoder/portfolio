import { useReducedMotion } from "framer-motion";

/**
 * Fixed full-viewport plexus loop the whole page scrolls over. A uniform
 * scrim keeps text readable; sections stay transparent so the motion shows
 * through everywhere.
 */
export function BackgroundVideo() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20">
      <video
        className="h-full w-full object-cover opacity-35"
        src="/hero-plexus.mp4"
        poster="/hero-plexus-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      />
      <div className="absolute inset-0 bg-bg/40" />
    </div>
  );
}
