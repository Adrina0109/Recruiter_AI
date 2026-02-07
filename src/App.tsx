import { Hero } from './components/Hero';
import { FlowSection } from './components/FlowSection';
import { StatsSection } from './components/StatsSection';
import { LogoSlider } from './components/LogoSlider';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-lightPrimary/20 selection:text-white">
      <a
        href="#hero-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-xs focus:text-black focus:outline-none focus:ring-2 focus:ring-lightPrimary"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary shadow-soft-glow transition-transform hover:rotate-12">
              <span className="text-xs font-bold text-black">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white">RecruiterAI</span>
              <span className="text-[10px] font-medium tracking-wide text-white/50 uppercase">
                Intelligence Flow
              </span>
            </div>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-white/60 sm:flex">
            <a href="#impact-heading" className="link-underline transition-colors hover:text-white">
              Metrics
            </a>
            <a href="#flows-heading" className="link-underline transition-colors hover:text-white">
              Process
            </a>
            <a href="#faq-heading" className="link-underline transition-colors hover:text-white">
              Support
            </a>
            <div className="h-4 w-px bg-white/10" />
            <button className="text-white/90 transition-opacity hover:opacity-80">
              Sign In
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <FlowSection />
        <StatsSection />
        <LogoSlider />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/5 bg-[#050505] py-12 text-[10px] font-medium uppercase tracking-widest text-darkSecondary/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-white/80">© {new Date().getFullYear()}</span>
            <span>RecruiterAI Intelligence Inc.</span>
          </div>

          <div className="flex gap-8">
            <button type="button" className="transition-colors hover:text-white">
              System Status
            </button>
            <button type="button" className="transition-colors hover:text-white">
              Privacy Protocol
            </button>
            <button type="button" className="transition-colors hover:text-white">
              Security API
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div >
      </footer >
    </div >
  );
}

export default App;

