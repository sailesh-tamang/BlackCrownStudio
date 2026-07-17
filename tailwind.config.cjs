/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a',
        graphite: '#141414',
        steel: '#232323',
        pearl: '#f5f3ef',
        accent: '#d4af37',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
