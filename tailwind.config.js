/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "#f1f1f7",
        "primary-000": "#dde3e7",
        "primary-100": "#b3bec9",
        "primary-200": "#8c98a4",
        "secondary-000": "#20212a",
        "secondary-100": "#24252e",
        "secondary-200": "#15161e",
        "additional-green": "#86d26b",
      },
      fontFamily: {
        sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
        serif: ["Bodoni Moda", "serif"],
      },
      transitionProperty: {
        background:
          "background, background-image, opacity, max-width, max-height",
      },
    },
  },
  plugins: [],
};
