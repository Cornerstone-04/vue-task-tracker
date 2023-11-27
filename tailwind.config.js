/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: "Clash Display",
        helvetica:"Helvetica"
      },
      scale: {
        98: "0.98",
      },
      borderRadius:{
        5: "5px"
      },
      colors:{
        steelblue: "#4682B4"
      }
    },
  },
  plugins: [],
};
