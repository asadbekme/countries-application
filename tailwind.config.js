/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        darkModeBg: 'hsl(207, 26%, 17%)',
        veryDarkBlue: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        lightModeBg: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}