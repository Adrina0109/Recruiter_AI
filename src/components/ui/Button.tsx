import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  asChild?: boolean;
  showSweep?: boolean;
}

const baseClasses =
  'relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-lightPrimary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
  secondary:
    'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
  ghost:
    'bg-transparent text-darkSecondary hover:text-white hover:bg-white/5',
};

export function Button({
  children,
  variant = 'primary',
  className,
  showSweep = false,
  asChild,
  ...props
}: ButtonProps) {
  // Destructure out the motion props we are using or that might conflict
  const { whileHover, whileTap, ...buttonProps } = props as any;

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...buttonProps}
    >
      <div className="relative z-10 flex items-center gap-2">
        {children}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Light Sweep */}
      {showSweep && (
        <div className="animate-sweep absolute inset-0 z-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
    </motion.button>
  );
}

