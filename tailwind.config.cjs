const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Georgia"', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
