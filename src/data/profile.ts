/**
 * Single source of truth for all portfolio content.
 *
 * Privacy: client brand names are intentionally generalized (e.g. "tier-1 US
 * sports & entertainment streaming platforms" instead of naming the partners).
 * Employer names and measurable impact are kept. Update freely — every section
 * renders from this file.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: "linkedin" | "github";
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  employment?: string;
  current?: boolean;
  bullets: string[];
}

export interface Project {
  title: string;
  blurb: string;
  platforms: string[];
  highlights: string[];
  tags: string[];
  featured?: boolean;
}

export interface OpenSourceItem {
  name: string;
  repo: string;
  description: string;
  tags: string[];
  href: string;
  license?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export const profile = {
  name: "Sourav Rawat",
  role: "Senior Android Developer",
  titleLine: "Kotlin · Jetpack Compose · KMP / CMP",
  location: "Noida, India",
  available: "Open to senior Android & multiplatform roles",
  heroTagline:
    "I build high-performance Android and cross-platform apps and SDKs — one Kotlin & Compose codebase that ships across mobile, TV, and iOS.",
  summary:
    "Senior Android Developer with 4+ years building high-performance apps and cross-platform SDKs in Kotlin, Jetpack Compose, and Clean Architecture. I architected a single Compose panel SDK that runs inside the video players of tier-1 US sports & entertainment streaming platforms — serving millions of viewers — backed by a Kotlin Multiplatform data layer adopted by the iOS, tvOS, and web teams. Strong across MVVM and multi-module architecture, coroutines / Flow, Media3 / ExoPlayer playback (HLS, Widevine DRM, subtitles), in-app purchases, and partner-facing SDK delivery.",
  email: "souravrawat77777777@gmail.com",
  resumeUrl: "/resume.pdf",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sourav-rawat-android-dev",
    handle: "sourav-rawat-android-dev",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/souravnoobcoder",
    handle: "souravnoobcoder",
    icon: "github",
  },
];

export const stats: Stat[] = [
  { value: "4+", label: "Years shipping Android" },
  { value: "Millions", label: "Viewers reached in production" },
  { value: "4", label: "Platforms from one codebase" },
  { value: "1", label: "Shared KMP layer, 3 teams" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["Kotlin", "Java"] },
  {
    title: "Multiplatform",
    skills: [
      "Kotlin Multiplatform (KMP)",
      "Compose Multiplatform (CMP)",
      "Shared KMP data layers",
    ],
  },
  {
    title: "UI",
    skills: [
      "Jetpack Compose",
      "Adaptive layouts",
      "D-pad / TV UI",
      "Material Design",
      "XML Layouts",
    ],
  },
  {
    title: "Media & Playback",
    skills: [
      "Media3 / ExoPlayer",
      "HLS",
      "Widevine DRM",
      "Subtitles (WebVTT)",
      "Ad insertion",
      "AVPlayer (iOS)",
    ],
  },
  {
    title: "Architecture",
    skills: ["Clean Architecture", "MVVM", "Multi-module"],
  },
  {
    title: "Async",
    skills: ["Coroutines", "Flow / StateFlow", "RxJava / RxAndroid"],
  },
  {
    title: "TV Platforms",
    skills: ["Android TV", "Amazon Fire TV", "Leanback", "Custom launchers", "AOSP"],
  },
  {
    title: "Networking",
    skills: ["Ktor Client", "REST APIs", "WebSockets", "WiFi NSD", "WiFi P2P"],
  },
  {
    title: "Data & Storage",
    skills: ["Room", "Realm", "SQLite", "Firebase"],
  },
  {
    title: "Dependency Injection",
    skills: ["Hilt", "Koin"],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Unit testing (JUnit)",
      "Compose UI testing",
      "Screenshot testing",
      "Code reviews",
    ],
  },
  {
    title: "Tooling",
    skills: ["Android Studio", "Gradle", "Git", "Play Console", "Amazon Developer Console"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Senior Android Developer",
    company: "TVID Services",
    period: "Jun 2024 – Present",
    location: "Noida, India",
    current: true,
    bullets: [
      "Architected a single Jetpack Compose panel SDK that runs across Android TV, Fire TV, and Android mobile with platform-adaptive UI — in production inside the video players of tier-1 US sports & entertainment streaming platforms, serving millions of viewers; additional partner integrations in progress.",
      "Wrote the SDK's entire data and business-logic layer in Kotlin Multiplatform, adopted by the iOS, tvOS, and web panel teams — one implementation of the APIs and business rules instead of four platform rewrites.",
      "Led migration of an OTT streaming app from Jetpack Compose to Compose Multiplatform — one codebase targeting Android mobile, Android TV, Fire TV, and iOS (pre-release), with adaptive layouts for tablets and iPad.",
      "Built a Leanback + mobile-compatible SDK powering live streaming for partner streaming apps across Android TV, Fire TV, and mobile.",
      "Delivered UI, Media3 / ExoPlayer playback (HLS, Widevine DRM, subtitles), and D-pad navigation across Android TV, Fire TV, and phone builds; integrated Google Play and Amazon In-App Purchases on a Fire TV streaming app.",
      "Partner with US-based engineering teams across time zones — authoring integration guides and sample apps, and shipping versioned, backwards-compatible SDK releases guarded by unit, Compose UI, and screenshot tests plus code reviews.",
    ],
  },
  {
    role: "Android Developer",
    company: "Hitech Global",
    period: "Jun 2023 – Apr 2024",
    location: "New Delhi, India",
    employment: "Full-time · Hybrid",
    bullets: [
      "Built TV and second-screen remote-control features — navigation and app/content launching — using WiFi NSD, sockets, and Android sensors for cross-device pairing with Android TVs.",
      "Engineered news apps for mobile and Android TV with HLS streaming via ExoPlayer and the YouTube Player API, including curated channels and auto-play by category.",
      "Redesigned a launcher UI/UX with deep linking, increasing user engagement by 35%.",
      "Resolved critical stability issues to reach a 97% crash-free rate and hardened API data handling.",
    ],
  },
  {
    role: "Android Developer",
    company: "Hitech Global",
    period: "Apr 2022 – May 2023",
    location: "New Delhi, India",
    employment: "Part-time · Remote",
    bullets: [
      "Contributed to Android TV launcher development (Leanback) and AOSP-related platform tasks.",
      "Implemented Android cryptography features for secure on-device data handling.",
      "Developed WebView modules integrating HTML / CSS / JavaScript with native bridges.",
    ],
  },
  {
    role: "Android Intern",
    company: "Hitech Global",
    period: "Dec 2021 – Apr 2022",
    bullets: [
      "Built video-streaming proof-of-concept apps and a Leanback-based Android TV launcher; contributed to AOSP integration tasks.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Cross-Platform Panel SDK",
    blurb:
      "A single Jetpack Compose panel SDK embedded directly in the video players of tier-1 US streaming apps — one UI that adapts across TV and mobile, serving millions of viewers.",
    platforms: ["Android TV", "Fire TV", "Android mobile"],
    highlights: [
      "One Compose SDK with platform-adaptive UI for TV and mobile",
      "KMP data layer reused by the iOS, tvOS, and web teams",
      "Versioned, backwards-compatible releases — unit, Compose UI, and screenshot tested",
    ],
    tags: ["Jetpack Compose", "KMP", "Media3", "SDK"],
    featured: true,
  },
  {
    title: "OTT App — Compose Multiplatform Migration",
    blurb:
      "Led the migration of an OTT streaming app from Jetpack Compose to Compose Multiplatform — one codebase across Android mobile, Android TV, Fire TV, and iOS, with adaptive tablet and iPad layouts.",
    platforms: ["Android", "Android TV", "Fire TV", "iOS"],
    highlights: [
      "Single CMP codebase replacing parallel platform builds",
      "Adaptive layouts for phones, tablets, TV, and iPad",
      "Native iOS limited to AVPlayer and a few utility classes",
    ],
    tags: ["Compose Multiplatform", "Kotlin", "iOS", "Adaptive UI"],
    featured: true,
  },
  {
    title: "Live-Streaming SDK",
    blurb:
      "A Leanback + mobile-compatible SDK powering live streaming for partner apps across Android TV, Fire TV, and mobile.",
    platforms: ["Android TV", "Fire TV", "Mobile"],
    highlights: [
      "Live HLS playback built on Media3 / ExoPlayer",
      "One SDK spanning Leanback TV and mobile surfaces",
    ],
    tags: ["Media3", "ExoPlayer", "Leanback", "HLS"],
  },
  {
    title: "Streaming Media App",
    blurb:
      "Shipped UI, Media3 / ExoPlayer playback, and D-pad navigation across Android TV, Fire TV, and phone builds.",
    platforms: ["Android TV", "Fire TV", "Mobile"],
    highlights: [
      "HLS, Widevine DRM, and WebVTT subtitles",
      "D-pad navigation tuned for the TV experience",
    ],
    tags: ["Media3", "Widevine DRM", "Android TV"],
  },
  {
    title: "Streaming App — Fire TV",
    blurb:
      "A partner streaming app on Fire TV with Google Play and Amazon In-App Purchases integrated end to end.",
    platforms: ["Fire TV"],
    highlights: [
      "Google Play and Amazon IAP integration",
      "Fire TV–optimized navigation and UX",
    ],
    tags: ["Fire TV", "In-App Purchases"],
  },
];

export const openSource: OpenSourceItem[] = [
  {
    name: "RokuFocus",
    repo: "roku-focus-list",
    description:
      "A Jetpack Compose library for Roku-style fixed-focus D-pad navigation on Android TV / Fire TV, distilled from production OTT work — grid layouts, wrap-around, and key-repeat handling.",
    tags: ["Jetpack Compose", "Android TV", "JitPack"],
    href: "https://github.com/souravnoobcoder/roku-focus-list",
    license: "Apache-2.0",
  },
  {
    name: "adb-dashboard",
    repo: "adb-dashboard",
    description:
      "A local web dashboard (Python / FastAPI + JS) for managing Android devices over ADB — wireless pairing, screen recording, APK install, an interactive shell, and live device telemetry.",
    tags: ["Python", "FastAPI", "JavaScript", "ADB"],
    href: "https://github.com/souravnoobcoder/adb-dashboard",
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Shri Guru Ram Rai University (SGRRU)",
  period: "2020 – 2023",
  detail: "8.43 / 10 GPA",
};
