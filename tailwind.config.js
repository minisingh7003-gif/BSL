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
        bg: '#1C1018',
        fg: '#F5ECF0',
        card: '#261820',
        primary: '#C77B94',
        'primary-fg': '#1C1018',
        muted: '#6B5560',
        secondary: '#A38A95',
        border: '#3A2530',
        accent: '#5C1322',
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
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(199, 123, 148, 0.4)' },
          '50%': { 'box-shadow': '0 0 20px 4px rgba(199, 123, 148, 0.5)' },
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
