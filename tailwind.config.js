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
        bg: '#080809',
        fg: '#F3F1F2',
        card: '#111113',
        primary: '#E51A3A',
        'primary-fg': '#F3F1F2',
        'primary-dark': '#6E0B1A',
        muted: '#353439',
        secondary: '#929097',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: '#B78E48',
        burgundy: '#2A030B',
        maroon: '#6E0B1A',
        charcoal: '#111113',
        slate: '#1B1A1E',
        silver: '#929097',
        noir: {
          base: '#080809',
          surface: '#111113',
          elevated: '#1B1A1E',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        crimson: {
          neon: '#E51A3A',
          velvet: '#6E0B1A',
          deep: '#2A030B',
        },
        gold: {
          champagne: '#B78E48',
          brass: '#9E7A45',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
      },
      borderRadius: {
        none: '0px',
      },
      boxShadow: {
        'glow-crimson': '0 0 30px -5px rgba(255, 30, 66, 0.4)',
        'glow-crimson-lg': '0 0 60px -10px rgba(255, 30, 66, 0.6)',
        'glow-gold': '0 0 20px -3px rgba(212, 175, 55, 0.3)',
        'inner-velvet': 'inset 0 2px 10px 0 rgba(139, 10, 30, 0.5)',
      },
      backgroundImage: {
        'gradient-crimson-radial': 'radial-gradient(circle, rgba(255,30,66,0.25) 0%, rgba(59,4,13,0.15) 50%, rgba(11,11,13,0) 80%)',
        'gradient-velvet-button': 'linear-gradient(135deg, #E51A3A 0%, #6E0B1A 100%)',
        'gradient-gold-border': 'linear-gradient(135deg, rgba(212,175,55,0.6) 0%, rgba(255,255,255,0.05) 50%, rgba(212,175,55,0.2) 100%)',
        'fluted-panel': 'repeating-linear-gradient(90deg, #080809, #080809 12px, #111113 12px, #111113 16px)',
      },
      animation: {
        'clip-reveal': 'clip-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'pulse-cta': 'pulse-cta 2.5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        ripple: 'ripple 0.6s ease-out',
        'gradient-text': 'gradient-text 3s ease infinite',
        typewriter: 'typewriter 2s steps(40) forwards',
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
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(229, 26, 58, 0.35)' },
          '50%': { 'box-shadow': '0 0 20px 4px rgba(229, 26, 58, 0.42)' },
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
          '0%, 100%': { 'box-shadow': '0 0 5px rgba(229,26,58,0.25)' },
          '50%': { 'box-shadow': '0 0 20px rgba(229,26,58,0.5)' },
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
