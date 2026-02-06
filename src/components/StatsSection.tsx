import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const stats = [
  { label: 'Faster Screening', value: '10x', detail: 'Initial triage in minutes, not days.' },
  { label: 'Faster Time-to-Hire', value: '70%', detail: 'Compress weeks of back-and-forth.' },
  { label: 'Interview Capacity', value: '25x', detail: 'AI handles the first conversation.' },
  { label: 'Application Completion', value: '95%', detail: 'Frictionless candidate journeys.' },
  { label: 'More Qualified Applications', value: '89%', detail: 'Signals over spray-and-pray.' },
  { label: 'Lower Recruitment Cost', value: '80%', detail: 'Do more with a leaner team.' },
  { label: 'Reduction in Bad Hires', value: '50%', detail: 'Structured, data-backed decisions.' },
];

export function StatsSection() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative border-b border-white/5 bg-black py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="IMPACT"
            title="See the impact across every step of hiring"
            description="RecruiterAI compounds efficiency at every stage — from screening to final offer — so you can move decisively without burning out your team."
            align="left"
          />
          <p className="max-w-xs text-xs text-darkSecondary">
            Benchmarks from early customers hiring across product, engineering, sales, and support
            roles in fast-growing teams.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              className="stat-card group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent1/10 via-accent3/10 to-lightPrimary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-2 p-4">
                <span className="text-[11px] font-medium uppercase tracking-wide text-darkSecondary">
                  {stat.label}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-white">{stat.value}</span>
                </div>
                <p className="mt-1 text-[11px] text-darkSecondary group-hover:text-lightSecondary">
                  {stat.detail}
                </p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-white/5">
                  <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-accent1 via-accent3 to-lightPrimary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

