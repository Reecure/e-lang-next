/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1190px",
        audioCall: "736px",
      },
      screens: {
        "semi-lg": { min: "1000px" },
        // => @media (min-height: 800px) { ... }
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        DelaGothicOne: ["DelaGothicOne", "sans-serif"],
      },
      width: {
        0.5: "0.1rem",
        98: "29rem",
      },
      colors: {
        "cayan-dark": "#2b788b",
        "cayan-light": "#C3DCE3",
        "pink-dark": "#945069",
        "pink-light": "#F2D4DC",
        "primary-black": "#000000",
        "primary-white": "#ffffff",
        "gray-light": "#F6F5F4",
        "gray-medium": "#E0E0E0",
        "gray-icon": "#BABABA",
        "gray-dark": "#585858",
        "cayan-secondary": "#5996A5",
        "green-secondary": "#639B6D",
        "pink-secondary": "#A15993",
        "red-secondary": "#A95151",
        "yellow-secondary": "#C4A24C",
        "orange-secondary": "#CB5B43",
      },
    },
  },

  variants: {},
  plugins: [
    {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
