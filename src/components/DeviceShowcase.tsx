import type { ComponentType } from "react";
import { Flame } from "lucide-react";
import { AppleIcon, AndroidIcon } from "./ui/BrandIcons";
import { cn } from "../lib/cn";

type IconType = ComponentType<{ size?: number | string; className?: string }>;

const platforms: { label: string; Icon: IconType; tint: string }[] = [
  { label: "Android", Icon: AndroidIcon, tint: "text-[#3ddc84]" },
  { label: "iOS", Icon: AppleIcon, tint: "text-fg" },
  { label: "Android TV", Icon: AndroidIcon, tint: "text-[#3ddc84]" },
  { label: "Fire TV", Icon: (p) => <Flame {...p} />, tint: "text-orange-400" },
];

// Device chrome — kept local since it's illustration-specific, not app theming.
const frame = "bg-gradient-to-b from-[#26262e] to-[#141418] border border-[#37373f]";
const screen = "bg-[#0b0b0f] shadow-[inset_0_0_24px_rgba(0,0,0,0.7)]";

// Muted, content-like gradients so the cards read as varied artwork.
const g = [
  "from-rose-500/45 to-orange-700/20",
  "from-sky-500/45 to-indigo-700/20",
  "from-violet-500/45 to-fuchsia-700/20",
  "from-emerald-500/45 to-teal-700/20",
  "from-amber-500/45 to-yellow-700/20",
  "from-cyan-500/45 to-blue-700/20",
];
const continueRow = [
  { grad: g[3], progress: "72%" },
  { grad: g[1], progress: "45%" },
  { grad: g[0], progress: "88%" },
  { grad: g[2], progress: "22%" },
];
const trendingRow = [g[4], g[5], g[2], g[0], g[1], g[3], g[5]];
const appsRow = [g[1], g[3], g[0], g[5], g[2], g[4], g[1], g[3]];

/**
 * Hero visual: a TV (with stand) running a fixed-focus content rail — a nod to
 * the OTT / TV work — plus a companion phone in front, framed by the four
 * target platforms. Says "one codebase across mobile, TV, and iOS" at a glance.
 */
export function DeviceShowcase() {
  return (
    <div className="relative w-full max-w-[29rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[40px] accent-gradient opacity-[0.13] blur-2xl"
      />

      {/* Device cluster */}
      <div className="relative">
        {/* ===== TV ===== */}
        <div>
          <div className={cn("rounded-[16px] p-2.5 shadow-2xl shadow-black/50", frame)}>
            <div className={cn("relative aspect-video overflow-hidden rounded-[7px] px-2.5 pt-2.5", screen)}>
              {/* top nav bar */}
              <div className="mb-2.5 flex items-center gap-2 text-[8px] text-faint">
                <span className="h-2 w-2 rounded-[2px] accent-gradient" aria-hidden="true" />
                <span className="font-semibold text-fg/85">Home</span>
                <span>Movies</span>
                <span>Shows</span>
                <span>Live</span>
                <span className="ml-auto font-mono">9:41</span>
                <span className="h-2.5 w-2.5 rounded-full border border-line bg-surface-2" aria-hidden="true" />
              </div>

              {/* Row 1 — Continue watching (landscape, fixed-focus highlight) */}
              <p className="mb-1 font-mono text-[7px] uppercase tracking-[0.16em] text-faint">
                Continue watching
              </p>
              <div className="mb-2.5 flex gap-2">
                {continueRow.map((c, i) => {
                  const focused = i === 1;
                  return (
                    <div key={i} className="relative shrink-0">
                      <div
                        className={cn(
                          "relative h-[3.25rem] w-[5.5rem] overflow-hidden rounded bg-gradient-to-br",
                          c.grad,
                          focused && "scale-[1.06] brightness-110",
                        )}
                      >
                        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-black/50" aria-hidden="true">
                          <span className="block h-full accent-gradient" style={{ width: c.progress }} />
                        </span>
                      </div>
                      {focused ? (
                        <div
                          className="absolute -inset-[2.5px] rounded-md border-2 border-accent shadow-[0_0_11px_rgba(52,211,153,0.5)]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              {/* Row 2 — Trending now (portrait posters, ranked) */}
              <p className="mb-1 font-mono text-[7px] uppercase tracking-[0.16em] text-faint">
                Trending now
              </p>
              <div className="mb-2.5 flex gap-2">
                {trendingRow.map((grad, i) => (
                  <div
                    key={i}
                    className={cn(
                      "relative h-[4.25rem] w-[3.25rem] shrink-0 overflow-hidden rounded bg-gradient-to-br",
                      grad,
                    )}
                  >
                    <span className="absolute left-1 top-0.5 font-mono text-[12px] font-bold leading-none text-white/85">
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* Row 3 — Popular apps (peeks at the bottom edge) */}
              <p className="mb-1 font-mono text-[7px] uppercase tracking-[0.16em] text-faint">
                Popular apps
              </p>
              <div className="flex gap-2">
                {appsRow.map((grad, i) => (
                  <div
                    key={i}
                    className={cn("h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br", grad)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* TV stand: neck + base (centered, connected) */}
          <div
            className={cn("mx-auto h-5 w-12", frame)}
            style={{ clipPath: "polygon(38% 0, 62% 0, 70% 100%, 30% 100%)" }}
            aria-hidden="true"
          />
          <div className={cn("mx-auto -mt-px h-2 w-28 rounded-full", frame)} aria-hidden="true" />
        </div>

        {/* ===== Phone (in front, lower-right) — tall 9:19 body ===== */}
        <div className="absolute bottom-4 right-0 w-[21%] rotate-[3deg]">
          <div className={cn("relative rounded-[1.5rem] p-1 shadow-2xl shadow-black/60", frame)}>
            {/* side button */}
            <span
              className="absolute -right-[3px] top-12 h-10 w-[3px] rounded-r bg-[#37373f]"
              aria-hidden="true"
            />
            <div
              className={cn(
                "relative flex aspect-[9/19] flex-col overflow-hidden rounded-[1.25rem] px-1.5 pb-1.5 pt-2",
                screen,
              )}
            >
              {/* notch */}
              <span
                className="absolute left-1/2 top-[5px] z-10 h-[5px] w-8 -translate-x-1/2 rounded-full bg-black"
                aria-hidden="true"
              />
              {/* status bar */}
              <div className="flex items-center justify-between font-mono text-[6px] text-faint">
                <span>9:41</span>
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  <i className="h-1 w-1 rounded-full bg-faint" />
                  <i className="h-1 w-1 rounded-full bg-faint" />
                  <i className="h-1 w-1.5 rounded-[1px] bg-faint" />
                </span>
              </div>
              {/* app content */}
              <div className="mt-2 flex-1 space-y-1.5">
                <div className="h-2 w-2/3 rounded accent-gradient" />
                <div className="h-11 rounded-lg bg-gradient-to-br from-accent/80 to-accent-2/50" />
                <div className="h-1.5 w-3/4 rounded bg-line" />
                <div className="h-1.5 w-1/2 rounded bg-line-soft" />
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="aspect-square rounded-md bg-[#1b1b21]" />
                  <div className="aspect-square rounded-md bg-[#1b1b21]" />
                </div>
              </div>
              {/* bottom tab bar */}
              <div className="flex items-center justify-around pt-1.5" aria-hidden="true">
                <i className="h-1.5 w-1.5 rounded-full bg-accent" />
                <i className="h-1.5 w-1.5 rounded-full bg-line" />
                <i className="h-1.5 w-1.5 rounded-full bg-line" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target platforms */}
      <div className="mt-12 flex flex-wrap justify-center gap-2 lg:justify-start">
        {platforms.map(({ label, Icon, tint }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
          >
            <Icon size={13} className={tint} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
