import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const flows = [
  {
    title: 'Automated Screening',
    subtitle: 'AI-driven triage for every incoming applicant.',
    steps: [
      'Application Submitted',
      'AI Resume Analysis',
      'Qualification Check?',
      'Schedule Interview',
    ],
  },
  {
    title: 'Interview Orchestration',
    subtitle: 'Seamless movement between stage-gates.',
    steps: [
      'AI Initial Interview',
      'Technical Evaluation?',
      'Manager Review',
      'Generate Offer',
    ],
  },
  {
    title: 'Talent Nurturing',
    subtitle: 'Re-engage top talent for future openings.',
    steps: [
      'Archive & Label',
      'Passive Monitoring',
      'Role Match?',
      'Direct Fast-Track',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
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

const stepVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function FlowSection() {
  return (
    <section
      id="flows-heading"
      aria-labelledby="flows-heading"
      className="relative overflow-hidden border-b border-white/5 bg-[#050505] py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="AUTOMATION ENGINE"
            title="Design Your Perfect Hiring Flow"
            description="Build custom hiring pipelines that run themselves. From first click to first day, RecruiterAI automates the logistics so you can focus on the human connection."
            align="left"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {flows.map((flow, flowIndex) => (
            <motion.div key={flow.title} variants={cardVariants} className="group relative">
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-full rounded-[2rem] border border-white/5 bg-white/[0.04] p-8 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{flow.title}</h3>
                    <p className="mt-2 text-sm text-darkSecondary">{flow.subtitle}</p>
                  </div>
                </div>

                <div className="relative space-y-6">
                  {/* Vertical Connector Line */}
                  <div className="absolute left-[11px] top-6 h-[calc(100%-24px)] w-[1px] bg-white/5">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + flowIndex * 0.2, ease: "easeInOut" }}
                      className="w-full bg-gradient-to-b from-lightPrimary via-accent3 to-transparent"
                    />
                  </div>

                  {flow.steps.map((step, stepIndex) => {
                    const isDecision = step.endsWith('?');
                    return (
                      <motion.div
                        key={step}
                        variants={stepVariants}
                        className="group/step relative flex items-center gap-4"
                      >
                        <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                          {isDecision ? (
                            <div className="h-4 w-4 rotate-45 border border-accent3 bg-accent3/20 shadow-[0_0_10px_rgba(177,151,252,0.3)] transition-all duration-300 group-hover/step:scale-110 group-hover/step:bg-accent3/30" />
                          ) : (
                            <div className="h-3 w-3 rounded-full border border-lightPrimary bg-lightPrimary/20 shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300 group-hover/step:scale-110 group-hover/step:bg-lightPrimary/30" />
                          )}
                        </div>

                        <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-all duration-500 group-hover/step:border-white/10 group-hover/step:bg-white/[0.06] group-hover/step:-translate-y-0.5 group-hover/step:shadow-soft-glow">
                          <p className={`text-xs font-medium transition-colors duration-300 ${isDecision ? 'text-accent3' : 'text-white/75 group-hover/step:text-white'}`}>
                            {step}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-10">
                  <button className="text-[11px] font-semibold uppercase tracking-widest text-lightPrimary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Customize Template →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

