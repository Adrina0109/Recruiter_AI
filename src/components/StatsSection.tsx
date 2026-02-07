import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { useEffect, useRef, useState } from 'react';

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { label: 'Faster Screening', value: 10, suffix: 'x', detail: 'Initial triage in minutes, not days.' },
  { label: 'Faster Time-to-Hire', value: 70, suffix: '%', detail: 'Compress weeks of back-and-forth.' },
  { label: 'Interview Capacity', value: 25, suffix: 'x', detail: 'AI handles the first conversation.' },
  { label: 'Completion Rate', value: 95, suffix: '%', detail: 'Frictionless candidate journeys.' },
  { label: 'Qualified Apps', value: 89, suffix: '%', detail: 'Signals over spray-and-pray.' },
  { label: 'Efficiency Gain', value: 3.5, suffix: 'x', detail: 'Do more with a leaner team.' },
  { label: 'Decisive Results', value: 50, suffix: '%', detail: 'Structured, data-backed decisions.' },
  { label: 'Cost Reduction', value: 65, suffix: '%', detail: 'Significant overhead optimization.' },
];

export function StatsSection() {
  return (
    <section
      id="metrics"
      aria-labelledby="impact-heading"
      className="relative border-b border-white/5 bg-[#050505] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="COMPOUNDING IMPACT"
            title="Accelerate Every Stage of Your Hiring Pipeline"
            description="RecruiterAI compounds efficiency across your entire workflow, enabling your team to move decisively without the burnout of manual screening."
            align="left"
          />
          <div className="max-w-xs border-l border-white/10 pl-6">
            <p className="text-xs leading-relaxed text-darkSecondary">
              Benchmarks based on cross-industry performance data from fast-growing engineering and product teams.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="stat-card group cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative flex flex-col gap-4 p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-darkSecondary/80">
                  {stat.label}
                </span>

                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full bg-lightPrimary/5 blur-xl group-hover:bg-lightPrimary/20 transition-colors" />
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-darkSecondary group-hover:text-white transition-colors">
                  {stat.detail}
                </p>

                <div className="mt-2 h-[1px] w-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full bg-gradient-to-r from-transparent via-lightPrimary/40 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

