/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        navy: 'var(--color-navy)',
        'navy-deep': 'var(--color-navy-deep)',
        cream: 'var(--color-cream)',
        'cream-warm': 'var(--color-cream-warm)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
}