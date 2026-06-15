import { ArrowUp } from "lucide-react";
import { profile, socials } from "../data/profile";
import { SocialIcon } from "./ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-fg">{profile.name}</p>
          <p className="mt-1 text-xs text-faint">
            © {year} · {profile.role} · Built with React, Vite &amp; Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <SocialIcon icon={s.icon} size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
