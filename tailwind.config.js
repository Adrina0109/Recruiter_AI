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
        darkPrimaryBg: '#000000',
        darkSecondaryBg: '#404040',
        darkSecondary: '#737373',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.55)',
        glow: '0 0 50px rgba(59, 130, 246, 0.4)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, #A5D8FF 0, transparent 55%), radial-gradient(circle at top right, #D0BCFF 0, transparent 55%), radial-gradient(circle at bottom, #3B82F6 0, transparent 60%)',
        'section-gradient':
          'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(177,151,252,0.18))',
        'card-gradient':
          'linear-gradient(135deg, rgba(165,216,255,0.14), rgba(208,188,255,0.08))',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'logo-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-delay': 'float-delay 11s ease-in-out infinite',
        'logo-marquee': 'logo-marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

