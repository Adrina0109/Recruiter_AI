import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { GlassCard } from './ui/GlassCard';

const testimonials = [
  {
    name: 'Ananya Gupta',
    role: 'VP of People, Series B SaaS',
    quote:
      'RecruiterAI turned our chaotic hiring into a predictable system. Our hiring managers now see a shortlist of truly qualified candidates within hours.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder & CEO, Remote-first startup',
    quote:
      'We used to spend evenings skimming resumes. Now, the team only steps in when candidates are already vetted with structured signals. It changed how we hire.',
  },
  {
    name: 'Swati Rao',
    role: 'Head of Talent, Growth-stage fintech',
    quote:
      'Candidates actually reply to our outreach now. The follow-ups, nudges, and scheduling just happen in the background while we focus on closing offers.',
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative border-b border-white/5 bg-black py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.24),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            eyebrow="CUSTOMER STORIES"
            title="Teams that hire like top-tier companies, without the headcount"
            description="RecruiterAI gives lean teams the leverage of a full-stack recruiting function, without extra overhead."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <GlassCard key={t.name} delay={0.1 + index * 0.1} className="bg-black/70">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),transparent_60%)]" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-white">{t.name}</span>
                  <span className="text-[11px] text-darkSecondary">{t.role}</span>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-[11px] leading-relaxed text-lightSecondary"
              >
                “{t.quote}”
              </motion.p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

