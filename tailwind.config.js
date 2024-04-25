/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lego-sand-green": "#A0BCAC",
        "lego-green": "#009247",
        "lego-sand-blue": "#678297",
        "lego-dark-azure": "#00A3DA",
        "lego-sand-red": "#D67572",
        "lego-dark-red": "#7F131B",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
      },
    },
  },
  plugins: [],
};
