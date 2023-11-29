/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: "Clash Display",
        helvetica: "Helvetica",
      },
      scale: {
        98: "0.98",
      },
      borderRadius: {
        5: "5px",
      },
      colors: {
        "steel-blue": "#4682B4",
        ivory: "#FFFFF0",
        marble: "#F2F8FC",
        pearl: "#FCFCF7",
        lavender: "#F4F1F8",
        "cold-steel": "#F8F7F4",
      },
    },
  },
  plugins: [],
};
