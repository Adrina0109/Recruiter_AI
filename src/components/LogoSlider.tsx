import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';

const LOGOS = [
  'LinkedIn',
  'Naukri',
  'Indeed',
  'AngelList',
  'Instahyre',
  'Wellfound',
  'IIMJobs',
  'Glassdoor',
  'Monster',
  'Cutshort',
];

export function LogoSlider() {
  const track = [...LOGOS, ...LOGOS, ...LOGOS]; // Triple it for seamless looping

  return (
    <section
      aria-labelledby="logo-slider-heading"
      className="relative border-b border-white/5 bg-[#050505] py-24 sm:py-32"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="GLOBAL CHANNELS"
            title="Reach the Best Talent, Everywhere"
            description="Sync your roles with the world's most effective talent networks. One click to publish, one dashboard to manage everything."
            align="left"
          />
          <div className="max-w-[200px] border-l border-white/10 pl-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-darkSecondary">
              Integrations with 50+ platforms
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Edge Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />

          <div className="mask-edge-fade overflow-hidden py-4">
            <motion.div
              animate={{
                x: [0, -1035], // Adjust based on logo width + gap
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex w-max gap-8"
            >
              {track.map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="group relative flex h-14 min-w-[160px] items-center justify-center rounded-2xl border border-white/5 bg-white/[0.04] px-8 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.08] hover:shadow-soft-glow"
                >
                  <span className="text-xs font-semibold tracking-wide text-darkSecondary/60 transition-all duration-500 group-hover:scale-105 group-hover:text-white">
                    {name}
                  </span>
                  {/* Subtle hover decoration */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lightPrimary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

