/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'Marine-blue': 'hsl(213, 96%, 18%)',
        'Purplish-blue': 'hsl(243, 100%, 62%)',
        'Pastel-blue': 'hsl(228, 100%, 84%)',
        'Light-blue': 'hsl(206, 94%, 87%)',
        'Strawberry-red': 'hsl(354, 84%, 57%)',
        'Cool-gray': 'hsl(231, 11%, 63%)',
        'Light-gray': 'hsl(229, 24%, 87%)',
        'Magnolia': 'hsl(217, 100%, 97%)',
        'Alabaster': 'hsl(231, 100%, 99%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'sans': ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}