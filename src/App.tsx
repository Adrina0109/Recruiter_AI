import { Hero } from './components/Hero';
import { FlowSection } from './components/FlowSection';
import { StatsSection } from './components/StatsSection';
import { LogoSlider } from './components/LogoSlider';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <a
        href="#hero-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-xs focus:text-white focus:outline-none focus:ring-2 focus:ring-lightPrimary"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary shadow-glow">
              <span className="text-xs font-semibold text-black">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white">RecruiterAI</span>
              <span className="text-[10px] text-darkSecondary">
                AI-powered recruiting platform
              </span>
            </div>
          </div>
          <nav aria-label="Primary" className="hidden items-center gap-6 text-xs text-darkSecondary sm:flex">
            <a href="#impact-heading" className="hover:text-white">
              Results
            </a>
            <a href="#flows-heading" className="hover:text-white">
              How it works
            </a>
            <a href="#faq-heading" className="hover:text-white">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FlowSection />
        <StatsSection />
        <LogoSlider />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/5 bg-black py-6 text-[11px] text-darkSecondary">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RecruiterAI. All rights reserved.</p>
          <div className="flex gap-4">
            <button type="button" className="hover:text-white">
              Privacy
            </button>
            <button type="button" className="hover:text-white">
              Security
            </button>
            <button type="button" className="hover:text-white">
              Terms
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

