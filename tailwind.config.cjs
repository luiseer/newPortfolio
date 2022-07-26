/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2DFCD8',
        'secondary-color': '#8257FA',
        'blue-color': '#4B59D6',
        'green-color': '#4BBBD6',
      }
    },
  },
  plugins: [],
}