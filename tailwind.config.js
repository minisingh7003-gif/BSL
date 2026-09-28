/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#0D1321',
        fg: '#EAE5D9',
        card: '#141D2F',
        primary: '#C5A059',
        'primary-fg': '#0D1321',
        muted: '#4A5568',
        secondary: '#8B8474',
        border: '#1E2A42',
        accent: '#8B6914',
      },
      borderRadius: {
        'none': '0px',
      },
      animation: {
        'clip-reveal': 'clip-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'pulse-cta': 'pulse-cta 2.5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'clip-reveal': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-cta': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(197, 160, 89, 0.4)' },
          '50%': { 'box-shadow': '0 0 20px 4px rgba(197, 160, 89, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
