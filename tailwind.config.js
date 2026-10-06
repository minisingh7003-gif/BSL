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
        bg: '#0D0D0D',
        fg: '#F5F5F5',
        card: '#1C1C1C',
        primary: '#DC143C',
        'primary-fg': '#F5F5F5',
        'primary-dark': '#8B0000',
        muted: '#2E2E2E',
        secondary: '#B0BEC5',
        border: '#2E2E2E',
        accent: '#FF1744',
        burgundy: '#4A0010',
        maroon: '#3B0000',
        charcoal: '#1C1C1C',
        slate: '#2E2E2E',
        silver: '#B0BEC5',
      },
      borderRadius: {
        'none': '0px',
      },
      animation: {
        'clip-reveal': 'clip-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'pulse-cta': 'pulse-cta 2.5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'gradient-text': 'gradient-text 3s ease infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
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
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(220, 20, 60, 0.4)' },
          '50%': { 'box-shadow': '0 0 20px 4px rgba(220, 20, 60, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 5px rgba(220,20,60,0.3)' },
          '50%': { 'box-shadow': '0 0 20px rgba(220,20,60,0.6)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'gradient-text': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
