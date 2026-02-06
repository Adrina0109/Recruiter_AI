import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  asChild?: boolean;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-60 disabled:cursor-not-allowed';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-lightPrimary text-white hover:bg-lightPrimary/90 shadow-soft focus-visible:ring-lightPrimary',
  secondary:
    'bg-white/5 text-white hover:bg-white/10 border border-white/15 focus-visible:ring-lightPrimary',
  ghost:
    'bg-transparent text-darkSecondary hover:text-white hover:bg-white/5 focus-visible:ring-lightPrimary',
};

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

