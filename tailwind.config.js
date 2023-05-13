/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/js/theme.js"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        sans:['Vazir'],
      }
    },
  },
  plugins: [
  require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  }),
],
}
