const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne_mono: ["Syne Mono", "monospace"],
        press: ["Press Start 2P", "cursive"],
        ubuntu: ["Ubuntu Mono", "monospace"],
        kanit: ["Kanit"],
        bangers: ["Bangers"],
      },
    },
  },
  plugins: [],
};
