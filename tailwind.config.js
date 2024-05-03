/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text|to)-(lego-sand-green|lego-green|lego-sand-blue|lego-dark-azure|lego-sand-red|lego-dark-red|lego-medium-lavender|lego-purple)/,
      variants: ["hover"],
    },
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
        "lego-medium-lavender": "#9675B4",
        "lego-purple": "#4C2F92",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
      },
    },
  },
  plugins: [],
};
