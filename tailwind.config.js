/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0 %, 55 %)",
        "very-dark-gray": "hsl(0, 0 %, 41 %)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}