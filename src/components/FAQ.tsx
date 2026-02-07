import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const faqs = [
  {
    question: 'How does AI screening work?',
    answer:
      'RecruiterAI parses resumes, applications, and interview responses to score candidates against your role criteria based on the specific signals you prioritize. Our models surface the strongest matches with human-readable reasoning, so you always know why a candidate was ranked.',
  },
  {
    question: 'Does it integrate with our ATS?',
    answer:
      'Yes. RecruiterAI connects seamlessly with modern ATS platforms like Greenhouse, Lever, and Ashby via secure API or webhooks. Candidates, stages, and notes stay in sync automatically.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'We offer flexible, usage-based pricing designed to scale with your hiring velocity. Most teams start with a professional plan that includes a set number of active roles and AI assessment tokens per month.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most teams go live in under 7 days. We handle the heavy lifting: importing your existing roles, configuring your unique workflows, and setting up secure integrations.',
  },
  {
    question: 'What about data security?',
    answer:
      'Security is our top priority. We follow industry best practices, including AES-256 encryption at rest and TLS 1.3 in transit. Candidate data is never used to train global models, ensuring your competitive advantage stays yours.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative border-b border-white/5 bg-[#050505] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(177,151,252,0.05),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="COMMON QUESTIONS"
          title="Everything You Need to Know"
          description="Clear answers to the questions we hear most from high-growth engineering and product teams."
          align="left"
        />

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'border-white/10 bg-white/[0.04] shadow-premium' : 'border-white/5 bg-transparent hover:border-white/10'
                  }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-base font-semibold tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70'}`}>
                    {faq.question}
                  </span>
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      className="absolute h-[2px] w-3 bg-white/20"
                    />
                    <motion.div
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      className="absolute h-[2px] w-3 bg-white/20"
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-sm leading-relaxed text-darkSecondary/90 max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

