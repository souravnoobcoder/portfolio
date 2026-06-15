import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile, socials } from "../data/profile";
import { SocialIcon } from "./ui/SocialIcon";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        </div>

        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Get in touch
        </p>
        <h2
          id="contact-heading"
          className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-fg sm:text-4xl"
        >
          Let&apos;s build something that ships everywhere
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted">
          I&apos;m {profile.available.toLowerCase()}. Drop me an email, connect on
          LinkedIn, or take a look at my code and resume below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg accent-gradient px-5 py-3 text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={17} aria-hidden="true" />
            Email me
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              <SocialIcon icon={s.icon} size={17} aria-hidden="true" />
              {s.label}
              <ArrowUpRight
                size={15}
                className="text-faint transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
          >
            <FileText size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
