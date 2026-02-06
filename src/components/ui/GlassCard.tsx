import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
      className={clsx(
        'glass-card gradient-border relative overflow-hidden rounded-3xl p-5 md:p-6',
        'shadow-soft',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

