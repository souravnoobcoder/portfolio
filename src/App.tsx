import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechMarquee } from "./components/TechMarquee";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { OpenSource } from "./components/OpenSource";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CursorGlow } from "./components/ui/CursorGlow";
import { BackgroundVideo } from "./components/ui/BackgroundVideo";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>

      <BackgroundVideo />
      <ScrollProgress />
      <CursorGlow />
      {/* Film grain over the whole page for texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] bg-noise opacity-[0.045]"
      />

      <Navbar />

      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}
