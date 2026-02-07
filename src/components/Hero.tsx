import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { useRef } from 'react';

const conversationCards = [
  {
    name: 'Sarah K.',
    role: 'Founder',
    quote:
      "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent.",
    position: 'top-6 left-0 md:-left-10',
    delay: 0.1,
  },
  {
    name: 'Rahul M.',
    role: 'Hiring Manager',
    quote:
      'Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months.',
    position: 'bottom-4 left-2 md:-left-6',
    delay: 0.2,
  },
  {
    name: 'Priya S.',
    role: 'CEO',
    quote: "I'm the CEO, product lead, AND now doing HR? No time to read resumes.",
    position: 'top-4 right-0 md:-right-8',
    delay: 0.3,
  },
  {
    name: 'Amit T.',
    role: 'Head of HR',
    quote:
      'Our best candidate accepted another offer while we were still scheduling interviews.',
    position: 'bottom-6 right-3 md:-right-8',
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-white/5 bg-[#050505]"
    >
      {/* Animated Background Glows */}
      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-lightPrimary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent3/10 blur-[120px]"
        />
      </motion.div>

      <div className="noise-overlay absolute inset-0 z-0" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-accent1 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lightPrimary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lightPrimary"></span>
            </span>
            AI-POWERED RECRUITING PLATFORM
          </motion.div>

          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className="max-w-4xl text-balance text-4xl font-bold tracking-tightest text-white sm:text-6xl lg:text-7xl"
          >
            Every Hire,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent1 via-accent3 to-lightPrimary bg-clip-text text-transparent">
                Faster and Better
              </span>
              <motion.span
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-1 left-0 h-1.5 bg-gradient-to-r from-accent1/20 to-lightPrimary/20 blur-sm"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-darkSecondary"
          >
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy
            lifting while you focus on building world-class teams.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
          >
            <Button type="button" className="h-14 px-10 text-base" showSweep>
              Start Hiring Smarter
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="h-14 px-10 text-base"
            >
              See How It Works
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            NO CREDIT CARD REQUIRED · GO LIVE IN UNDER 7 DAYS
          </motion.p>
        </motion.div>

        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="group relative overflow-hidden rounded-xl4 border-white/5 bg-white/[0.02] p-0 shadow-premium">
              <div className="noise-overlay absolute inset-0" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(165,216,255,0.08),transparent_40%)]" />
              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-1.5 text-xs font-medium text-emerald-400 ring-1 ring-white/10">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                      Live roles synced · Real-time prioritization
                    </div>
                  </div>

                  <div className="rounded-3xl bg-black/60 p-6 ring-1 ring-white/5 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/40">Active Role</p>
                        <p className="mt-1 text-xl font-medium text-white/90">Senior Product Manager</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                          8 Fast-tracked
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between text-[11px] font-medium uppercase tracking-widest text-white/40">
                      <span>Screening</span>
                      <span>AI Interview</span>
                      <span>Hiring Manager</span>
                      <span>Offer</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/5 p-[2px]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-accent1 via-accent3 to-lightPrimary shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                      />
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-white/40">Avg. Time to Shortlist</p>
                        <p className="mt-1 text-2xl font-semibold text-white/90">2.4<span className="text-sm font-normal text-white/40">h</span></p>
                      </div>
                      <div className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-white/40">Qualified Pipeline</p>
                        <p className="mt-1 text-2xl font-semibold text-emerald-400">+92%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="relative hidden md:block">
            {conversationCards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + card.delay }}
                className={`absolute ${card.position} z-20`}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <GlassCard className="w-[260px] border-white/10 bg-white/[0.04] p-5 shadow-premium backdrop-blur-3xl">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary p-[1px]">
                        <div className="h-full w-full rounded-full bg-black" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white/90">{card.name}</p>
                        <p className="text-[10px] uppercase tracking-wider text-white/40">{card.role}</p>
                      </div>
                    </div>
                    <p className="text-[11px] leading-relaxed text-white/60">{card.quote}</p>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

