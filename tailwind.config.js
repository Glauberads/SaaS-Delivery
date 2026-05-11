/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0F',
        primary: '#EA1D2C',
        'text-main': '#FFFFFF',
        'text-muted': '#A1A1AA',
      }
    },
  },
  plugins: [],
}
