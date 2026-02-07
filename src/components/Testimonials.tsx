import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const testimonials = [
  {
    name: 'Ananya Gupta',
    role: 'VP OF PEOPLE, SERIES B SAAS',
    quote:
      'RecruiterAI turned our chaotic hiring into a predictable system. Our hiring managers now see a shortlist of truly qualified candidates within hours.',
  },
  {
    name: 'Michael Chen',
    role: 'FOUNDER & CEO, REMOTE-FIRST STARTUP',
    quote:
      'We used to spend evenings skimming resumes. Now, the team only steps in when candidates are already vetted with structured signals. It changed how we hire.',
  },
  {
    name: 'Swati Rao',
    role: 'HEAD OF TALENT, GROWTH-STAGE FINTECH',
    quote:
      'Candidates actually reply to our outreach now. The follow-ups, nudges, and scheduling just happen in the background while we focus on closing offers.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative border-b border-white/5 bg-[#050505] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_rgba(177,151,252,0.1),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionHeader
            eyebrow="SUCCESS STORIES"
            title="Building High-Performance Teams"
            description="RecruiterAI empowers lean organizations to compete for top talent with the efficiency of a global enterprise."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/[0.04] group-hover:shadow-premium">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full p-[1px] ring-1 ring-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-tr from-accent1 via-accent3 to-lightPrimary bg-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),transparent_70%)] opacity-30" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-tight text-white">{t.name}</span>
                    <span className="text-[10px] font-medium tracking-wide text-darkSecondary uppercase">{t.role}</span>
                  </div>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-darkSecondary group-hover:text-white/90 transition-colors italic">
                  “{t.quote}”
                </p>

                <div className="mt-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent1 text-xs">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
