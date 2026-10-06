/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        editorial: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        ink: '#090908',
        night: '#10110F',
        panel: '#171814',
        champagne: '#D8B477',
        gold: '#C79A55',
        ivory: '#F4F0E8',
        smoke: '#A8A49B',
        wine: '#4C1827',
        emerald: '#163D35',
        electric: '#F04E83',
        line: 'rgba(216,180,119,0.2)',
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(0,0,0,0.38)',
        gold: '0 0 36px rgba(216,180,119,0.18)',
      },
    },
  },
  plugins: [],
};
