const colours = require("./src/patterns/01-base/colour-palette/colour-palette.json");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        br: colours
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
