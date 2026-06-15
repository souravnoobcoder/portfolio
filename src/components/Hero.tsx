import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { profile, socials } from "../data/profile";
import { Avatar } from "./ui/Avatar";
import { SocialIcon } from "./ui/SocialIcon";

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

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-accent-2/10 blur-[110px]" />
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
              variants={item}
              className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-xl font-semibold text-gradient sm:text-2xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-1 font-mono text-sm text-faint"
            >
              {profile.titleLine}
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
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-lg accent-gradient px-5 py-3 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
              >
                <FileText size={16} aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <SocialIcon icon={s.icon} size={18} aria-hidden="true" />
                </a>
              ))}
              <span className="ml-1 font-mono text-xs text-faint">
                {profile.location}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-first justify-self-center lg:order-last lg:justify-self-end"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[26px] accent-gradient opacity-20 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[22px] border border-line bg-surface p-1.5">
                <Avatar
                  src="/profile.jpg"
                  name={profile.name}
                  className="aspect-[4/5] w-60 rounded-2xl sm:w-72 lg:w-80"
                />
              </div>
              <a
                href="#contact"
                className="absolute -bottom-3 -right-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/90 px-3.5 py-2 text-xs font-medium text-fg shadow-lg backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
              >
                Let&apos;s talk
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
