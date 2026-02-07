import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import clsx from 'clsx';
import { Hero } from './components/Hero';
import { FlowSection } from './components/FlowSection';
import { StatsSection } from './components/StatsSection';
import { LogoSlider } from './components/LogoSlider';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

function App() {
  const [activeSection, setActiveSection] = useState<string>('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['metrics', 'flows-heading', 'support'];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Metrics', href: '#metrics', id: 'metrics' },
    { name: 'Process', href: '#flows-heading', id: 'flows-heading' },
    { name: 'Support', href: '#support', id: 'support' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-lightPrimary/20 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-accent1 via-accent3 to-lightPrimary origin-left shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ scaleX }}
      />

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

          <nav aria-label="Primary" className="hidden items-center gap-10 text-sm font-bold uppercase tracking-widest sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  'link-underline transition-all duration-300',
                  activeSection === link.id ? 'text-white' : 'text-white/60 hover:text-white'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
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

