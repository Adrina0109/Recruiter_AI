/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent1: '#A5D8FF',
        accent2: '#D0BCFF',
        accent3: '#B197FC',
        lightPrimary: '#3B82F6',
        lightPrimaryBg: '#EFF6FF',
        lightSecondaryBg: '#FFFFFF',
        lightSecondary: '#F3F4F6',
        darkPrimary: '#3B82F6',
        darkPrimaryBg: '#050505',
        darkSecondary: '#9CA3AF',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.5)',
        'soft-glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        premium: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(165, 216, 255, 0.15) 0, transparent 55%), radial-gradient(circle at top right, rgba(208, 188, 255, 0.15) 0, transparent 55%), radial-gradient(circle at bottom, rgba(59, 130, 246, 0.15) 0, transparent 60%)',
        'section-gradient':
          'linear-gradient(180deg, rgba(5, 5, 5, 1) 0%, rgba(10, 10, 10, 0.8) 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 40 L40 0' fill='none' stroke='white' stroke-opacity='0.03' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest: '0.1em',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
        xl4: '2.5rem',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'logo-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'logo-marquee': 'logo-marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};

