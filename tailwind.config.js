/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "1xs": "0.1rem",
        "2xs": "0.2rem",
        "3xs": "0.3rem",
        "4xs": "0.4rem",
        "5xs": "0.5rem",
        "6xs": "0.6rem",
        "7xs": "0.7rem",
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "22xl": "22rem",
      },
      scale: {
        170: "1.7",
        175: "1.75",
        180: "1.8",
      },
      flexShrink: {
        0.2: "0.2", // Adds shrink-0.2
      },
      colors: {
        "red-theme": "#ff0000",
        "card-color": "#022359",
        "card-color-light": "#032863",
        "blue-light": "#0184d8",
        "blue-medium": "#01599f",
      },
      height: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
