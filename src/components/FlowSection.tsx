import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { GlassCard } from './ui/GlassCard';

const flows = [
  {
    title: 'Automated Screening',
    subtitle: 'Let AI handle the initial triage so you never miss great talent.',
    steps: [
      'Application',
      'AI Resume Screening',
      'Send Questions',
      'Score > 75%?',
      'YES → Schedule Interview',
      'NO → Thank you email + Talent Pool',
    ],
  },
  {
    title: 'Multi Stage Interview',
    subtitle: 'Move candidates through structured, bias-aware interview stages.',
    steps: [
      'AI Interview',
      'Score > 80%?',
      'YES → Manager Interview → Hire/Reject',
      'NO → Auto rejection with feedback',
    ],
  },
  {
    title: 'Passive Candidate System',
    subtitle: 'Build a living talent pool that activates itself when roles open.',
    steps: [
      'Rejected but good → Add to Future Talent',
      'Wait',
      'New Role?',
      'YES → Re-engage → Fast track interview',
      'NO → Stay in pool',
    ],
  },
];

export function FlowSection() {
  return (
    <section
      aria-labelledby="flows-heading"
      className="relative border-b border-white/5 bg-gradient-to-b from-black via-[#020617] to-black py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-section-gradient/40 opacity-70" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="HOW IT WORKS"
            title="AI Recruiting Software That Works Like Your Own HR Team"
            description="Build custom hiring workflows in minutes. No coding required. Drag, drop, and let RecruiterAI orchestrate every step from application to offer."
            align="left"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {flows.map((flow, flowIndex) => (
            <GlassCard key={flow.title} delay={0.1 + flowIndex * 0.1} className="bg-black/60">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">{flow.title}</h3>
                  <p className="mt-1 text-[11px] text-darkSecondary">{flow.subtitle}</p>
                </div>
                <span className="rounded-full bg-lightPrimary/15 px-2 py-1 text-[10px] text-accent1 ring-1 ring-lightPrimary/40">
                  Automation
                </span>
              </div>
              <div className="space-y-3 text-[11px]">
                {flow.steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
                    className="relative flex items-center gap-2"
                  >
                    <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent1 via-accent3 to-lightPrimary" />
                    </div>
                    <div className="flex-1 rounded-xl bg-white/3 px-3 py-2 ring-1 ring-white/10">
                      <p className="text-[11px] text-darkSecondary/90">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="pointer-events-none absolute inset-x-0 -bottom-6 h-10 bg-gradient-to-b from-accent3/20 via-accent3/0 to-transparent blur-2xl"
              />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

