/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#130F40',
        secondary: '#67E9FF',
        fontPrimary: '#F5F5F5',
        fontSecondary: '#F8CC28',
      }
    },
  },
  plugins: [],
}

