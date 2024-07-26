/** @type {import('tailwindcss').Config}, */

export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["Instrument-sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-section":
          " url('/src/assets/images/gratisography-black-white-escalators-free-stock-photo.jpg')",
        "consult-section": " url('/src/assets/images/hero-1.jpg')",
      },
      colors: {
        primary: "rgb(11,165,233)",
        secondary: {
          100: "#F1F5F9",
          200: "#5c5c5c",
          300: "#333333",
        },
      },
    },
  },
  plugins: [],
};
