/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primarydark: "#130F40",
        // secondarydark: "#67E9FF",
        // fontPrimary: "#001a70",
        // fontSecondary: "#F8CC28",
        primary: "#e7f2fc",
        secondary: "#001a70", //#001a70
        accent: "#4c2cf0",
        white: "#fefffe"
      },
      fontFamily: {
        primary: ["Fira Sans Condensed", "sans-serif"],
        secondary: ["ABeeZee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
