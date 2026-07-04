/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        accentGreen: {
          bg: '#0f3a20',
          text: '#10b981',
          hover: '#059669',
        },
        accentOrange: {
          bg: '#c2410c',
          text: '#f97316',
          hover: '#ea580c',
        },
      },
    },
  },
  plugins: [],
}
