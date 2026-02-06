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
  const track = [...LOGOS, ...LOGOS];

  return (
    <section
      aria-labelledby="logo-slider-heading"
      className="relative border-b border-white/5 bg-[#020617] py-16 sm:py-20"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="CHANNELS"
            title="Post Once, Reach Everywhere"
            description="Distribute roles across every major job board and talent network in a single click. Track performance from one place."
            align="left"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020617] via-[#020617]/70 to-transparent"
          />
          <div className="logo-marquee-track animate-logo-marquee gap-4">
            {track.map((name, index) => (
              <button
                key={`${name}-${index}`}
                type="button"
                className="group relative flex h-16 min-w-[150px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-xs font-medium text-darkSecondary transition-colors hover:border-accent1/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightPrimary"
                aria-label={name}
              >
                <span className="relative">
                  <span className="block grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100">
                    {name}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

