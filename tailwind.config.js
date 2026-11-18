/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Classes stored in MongoDB (gallery_header.position / text_color) never appear
  // in source files, so Tailwind can't discover them. Safelist them explicitly.
  safelist: [
    {
      pattern:
        /^(top|bottom|left|right)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32)$/,
    },
    "text-white",
    "text-black",
    // Classes used inside HTML links in the markdown text stored in MongoDB
    "text-blue-500",
    "underline",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#B7C7D7",
          300: "#99B0C7",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
      },
    },
  },
  plugins: [],
};
