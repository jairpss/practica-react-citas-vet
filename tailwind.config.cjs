/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'figtree': ['Figtree', 'sans-serif']
      },
    },
  },
  plugins: [],
}
