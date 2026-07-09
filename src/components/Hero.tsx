import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { heroStackLines, profile, socials } from "../data/profile";
import { DeviceShowcase } from "./DeviceShowcase";
import { SocialIcon } from "./ui/SocialIcon";
import { Magnetic } from "./ui/Magnetic";
import { TiltCard } from "./ui/TiltCard";
import { Typewriter } from "./ui/Typewriter";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const letter = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Name split into per-letter spans that cascade up into view. */
function AnimatedName({ name }: { name: string }) {
  return (
    <>
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        {name.split(" ").map((word, wi, words) => (
          <span
            key={wi}
            className="inline-block overflow-hidden pb-[0.08em] align-top"
          >
            {[...(wi < words.length - 1 ? `${word} ` : word)].map(
              (ch, ci) => (
                <motion.span key={ci} variants={letter} className="inline-block">
                  {ch}
                </motion.span>
              ),
            )}
          </span>
        ))}
      </span>
    </>
  );
}

/** Plexus loop behind the hero; pauses offscreen to save battery. */
function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) void video.play().catch(() => {});
    else video.pause();
  }, [inView]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover opacity-40"
      src="/hero-plexus.mp4"
      poster="/hero-plexus-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
    />
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {!reduceMotion && <BackgroundVideo />}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/20 to-bg" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 animate-aurora rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-24 h-72 w-72 animate-aurora-slow rounded-full bg-accent-2/10 blur-[110px]" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 animate-aurora rounded-full bg-accent/5 blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.available}
            </motion.div>

            <motion.h1
              variants={container}
              className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <AnimatedName name={profile.name} />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-xl font-semibold sm:text-2xl"
            >
              <span className="text-shimmer">{profile.role}</span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-1 min-h-[1.5rem] font-mono text-sm text-faint"
            >
              <Typewriter lines={heroStackLines} />
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.heroTagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-lg accent-gradient px-5 py-3 text-sm font-semibold text-accent-ink shadow-[var(--shadow-glow)] transition-shadow hover:shadow-[var(--shadow-glow-strong)]"
                >
                  View my work
                  <ArrowDown
                    size={16}
                    className="transition-transform group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <FileText size={16} aria-hidden="true" />
                  Download Resume
                </a>
              </Magnetic>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <Magnetic key={s.label} strength={0.35}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <SocialIcon icon={s.icon} size={18} aria-hidden="true" />
                  </a>
                </Magnetic>
              ))}
              <Magnetic strength={0.35}>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </Magnetic>
              <span className="ml-1 font-mono text-xs text-faint">
                {profile.location}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-first flex min-w-0 justify-center lg:order-last lg:justify-end"
          >
            <TiltCard className="w-full max-w-[29rem]">
              <DeviceShowcase />
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-faint transition-colors hover:text-accent md:block"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
