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
      },
    },
  },
  plugins: [],
};
