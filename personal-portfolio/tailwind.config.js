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
        "sand-green": "#A0BCAC",
        "lego-green": "#009247",
        "lego-dark-orange": "#A65322",
        "lego-sand-blue": "#678297",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
      },
    },
  },
  plugins: [],
};
