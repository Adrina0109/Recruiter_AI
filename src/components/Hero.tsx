import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';

const conversationCards = [
  {
    name: 'Sarah K.',
    role: 'Founder',
    quote:
      "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent.",
    position: 'top-6 left-0 md:-left-10',
    animation: 'float-slow',
  },
  {
    name: 'Rahul M.',
    role: 'Hiring Manager',
    quote:
      'Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months.',
    position: 'bottom-4 left-2 md:-left-6',
    animation: 'float-delay',
  },
  {
    name: 'Priya S.',
    role: 'CEO',
    quote: "I'm the CEO, product lead, AND now doing HR? No time to read resumes.",
    position: 'top-4 right-0 md:-right-8',
    animation: 'float-delay',
  },
  {
    name: 'Amit T.',
    role: 'Head of HR',
    quote:
      'Our best candidate accepted another offer while we were still scheduling interviews.',
    position: 'bottom-6 right-3 md:-right-8',
    animation: 'float-slow',
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/5 bg-hero-gradient"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,216,255,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.95),#000000)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-accent1 ring-1 ring-white/15">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-lightPrimary" />
            AI-powered recruiting platform
          </div>
          <h1
            id="hero-heading"
            className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Every Hire,{' '}
            <span className="bg-gradient-to-r from-accent1 via-accent3 to-lightPrimary bg-clip-text text-transparent">
              Faster and Better
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-sm text-darkSecondary sm:text-base">
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy
            lifting while you focus on building your team.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button type="button">
              Start Hiring Smarter
              <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/15 text-[10px]">
                →
              </span>
            </Button>
            <Button type="button" variant="secondary" className="sm:ml-2">
              See How It Works
            </Button>
          </div>
          <p className="mt-4 text-xs text-darkSecondary">
            No credit card required · Go live in under 7 days
          </p>
        </motion.div>

        <div className="mt-14 grid w-full max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <GlassCard className="relative h-full overflow-hidden bg-card-gradient/80">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,216,255,0.16),transparent_55%)]" />
            <div className="relative flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-accent1 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live roles synced · Candidates prioritized in real time
              </div>
              <div className="rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-darkSecondary">Role</p>
                    <p className="text-sm font-medium text-white">Senior Product Manager</p>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">
                      8 fast-tracked
                    </span>
                    <span className="rounded-full bg-accent3/15 px-2 py-1 text-accent1">
                      3 offers out
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-darkSecondary">
                  <span>Screening</span>
                  <span>AI interview</span>
                  <span>Manager</span>
                  <span>Offer</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/5">
                  <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-accent1 via-accent3 to-lightPrimary shadow-glow" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-darkSecondary">Avg. time to shortlist</p>
                    <p className="mt-1 text-sm font-semibold text-white">2 hours</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-darkSecondary">Qualified candidates</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-300">+89%</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="relative hidden h-full md:block">
            {conversationCards.map((card, index) => (
              <GlassCard
                key={card.name}
                delay={0.2 + index * 0.1}
                className={`absolute ${card.position} w-[230px] animate-${card.animation} bg-black/70 px-4 py-4 text-left`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary" />
                  <div>
                    <p className="text-xs font-medium text-white">{card.name}</p>
                    <p className="text-[11px] text-darkSecondary">{card.role}</p>
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-darkSecondary">{card.quote}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-4 grid gap-3 md:hidden">
            {conversationCards.map((card, index) => (
              <GlassCard key={card.name} delay={0.15 + index * 0.08} className="bg-black/70">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary" />
                  <div>
                    <p className="text-xs font-medium text-white">{card.name}</p>
                    <p className="text-[11px] text-darkSecondary">{card.role}</p>
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-darkSecondary">{card.quote}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

