import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const faqs = [
  {
    question: 'How does AI screening work?',
    answer:
      'RecruiterAI parses resumes, applications, and interview responses to score candidates against your role criteria. You decide the signals that matter — experience, skills, seniority, keywords — and our models surface the strongest matches with full reasoning.',
  },
  {
    question: 'Does it integrate with our ATS?',
    answer:
      'Yes. RecruiterAI connects with modern ATS platforms via API or webhook, so candidates, stages, and notes stay in sync. For teams without an ATS, RecruiterAI can act as a lightweight system of record.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Pricing is usage-based. Most teams start with a plan that includes a fixed number of active roles and AI interviews per month, with volume discounts beyond that. Talk to us for a plan that fits your hiring velocity.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most teams go live in under a week. We import your existing roles, configure custom workflows, and set up integrations so your team can run their next hiring sprint fully on RecruiterAI.',
  },
  {
    question: 'What about data security?',
    answer:
      'We follow industry best practices for security and privacy, including encryption in transit and at rest. Candidate data is never used to train models shared across customers, and you stay in control of retention policies.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative border-b border-white/5 bg-[#020617] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,216,255,0.2),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers to questions hiring teams actually ask"
          description="If you are scaling hiring or just making your first few key hires, RecruiterAI is designed to feel like the recruiting partner you never had."
          align="left"
        />

        <div className="space-y-2" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-xl border border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 bg-black/50 px-4 py-3 text-left hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightPrimary"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-sm font-medium text-white">{faq.question}</span>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-xs text-darkSecondary"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden bg-black/60"
                    >
                      <div className="px-4 pb-4 pt-1 text-[11px] leading-relaxed text-darkSecondary">
                        {faq.answer}
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

