/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#3e3e3e",
        tertiary: "#232323",
        blue: "#1779BC",
        orange: "#F57C3E",
        "black-100": "#141414",
        "black-200": "#191919",
        "light-grey": "#cccccc",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
