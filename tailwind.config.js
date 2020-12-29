// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Texturina", "serif"],
    },
    extend: {
      colors: {
        primary: "#F37147",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      rotate: ["first", "last", "hover"],
      translate: ["first"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
