/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a0f1e',
        'surface': '#111827',
        'accent': '#64ffda',
        'accent-dim': '#64ffda26',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
        'border-subtle': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
