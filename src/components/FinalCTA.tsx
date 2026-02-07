import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative border-b border-white/5 bg-[#050505] py-24 sm:py-32 overflow-hidden"
    >
      {/* Drifting Background Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(177,151,252,0.8),transparent_70%)] blur-[80px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-md sm:p-20 group"
        >
          {/* Internal Glow Fallback */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-50" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              id="final-cta-heading"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Ready to automate your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightPrimary via-accent3 to-accent1">
                hiring intelligence?
              </span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-darkSecondary/80">
              Join high-growth teams using RecruiterAI to build their
              <br className="hidden sm:block" />
              engineering and product organizations with precision.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button className="h-14 px-10 text-base" showSweep>
                Start Free Trial
              </Button>
              <Button
                variant="secondary"
                className="h-14 px-10 text-base"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="mt-8 text-[11px] font-bold uppercase tracking-widest text-darkSecondary/40">
              No credit card required • 14-day free assessment • 24/7 Priority Support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
