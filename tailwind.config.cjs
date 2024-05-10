/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
        'primary': '#264653',
        'secondary': "#2a9d8f",
        'black2': "#000000",
        'white2': "#ffffff",
        'gray2': "#f0f0f0",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
