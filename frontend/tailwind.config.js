/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "340px",
        '2xs': "250px",
      },
    },
    fontFamily: {
      bokor: ["Barlow", "serif"],
    },
  },
  plugins: [],
};

