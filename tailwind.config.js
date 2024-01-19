/** @type {import('tailwindcss').Config}, */

export default {


  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": " url('/src/assets/images/hero-1.jpg')",
      },
      colors: {
        primary: "rgb(11,165,233)",
        secondary: {
          100: "#F1F5F9",
          200: "#4B5563",
        },
      },
    },
  },
  plugins: [],
};
