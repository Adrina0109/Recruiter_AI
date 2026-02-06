import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative border-b border-white/5 bg-black py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(177,151,252,0.28),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent3/15 via-black to-accent1/10 p-6 shadow-soft sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2
                id="final-cta-heading"
                className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Ready to Hire Better, Faster?
              </h2>
              <p className="mt-2 text-sm text-darkSecondary">
                Join 500+ companies hiring smarter with AI. Give your team the leverage of an entire
                recruiting function without adding headcount.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:min-w-[230px]">
              <Button type="button">Start Free Trial</Button>
              <Button type="button" variant="secondary">
                Schedule Demo
              </Button>
              <p className="text-[10px] text-darkSecondary">
                Get a tailored playbook for your next 3 key hires.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

