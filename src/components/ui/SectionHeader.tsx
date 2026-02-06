import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeaderProps): ReactNode {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-accent1 ring-1 ring-white/10">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm md:text-base text-darkSecondary">{description}</p>
      )}
    </motion.div>
  );
}

