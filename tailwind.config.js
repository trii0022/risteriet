module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#364259",
        secondary: "#748097",
        light: "#F8FBFD",
        dark: "#161A24",
        accent: "#96B58A",
        accentlighter: "#CBDAC5",
      },

      fontFamily: {
        lato: "'Lato', sans-serif",
        shadows: "'Shadows Into Light Two', cursive",
      },

      fontSize: {
        xs: ".75rem",
        sm: "1rem",
        tiny: "1.25rem",
        base: "1.375rem",
        lg: "1.625rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
};
