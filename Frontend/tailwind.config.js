const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/index.html",
    "./src/**/*.css",
    "./public/**/*.html",
  ],
  darkMode: "media",
  mode: "jit",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
        sky: colors.sky, // renamed from lightBlue
        stone: colors.stone, // renamed from warmGray
        neutral: colors.neutral, // renamed from trueGray
        gray: colors.gray, // renamed from coolGray
        slate: colors.slate, // renamed from blueGray
      },
      width: {
        400: "400px",
        1200: "1200px",
        1400: "1400px",
      },
      spacing: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
      },
      height: {
        350: "350px",
        custom: "74px",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    textSizeAdjust: "100%",
  },
  variants: {
    // ...
  },
  
};
