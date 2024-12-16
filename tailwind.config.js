/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F4F5F7',
        'cream': '#FBF3E8',
        'primary': '#1572E8',
        'secondary': '#E67E22',
        'dark': '#242424',
      },
      fontFamily: {
        'display': ['"DM Serif Display"', 'serif'],
        'body': ['"Helvetica Now"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'marquee-up': 'marquee-up var(--duration) linear infinite',
        'marquee-down': 'marquee-down var(--duration) linear infinite',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'marquee-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        'marquee-down': {
          '0%': { transform: 'translateY(calc(-100% - var(--gap)))' },
          '100%': { transform: 'translateY(0)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
    },
  },
  plugins: [],
};