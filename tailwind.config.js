/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2FA887",
          dark: "#1A6F5B", // you can customize this dark color
        },
        card: {
          light: "#f5f7f7",
          dark: "#303b49", // you can customize this dark color
        },
        button:{
          light: "#f0f4f6",
          dark: "#364252", // you can customize this dark color
          hover: {
            light: "#e0e4e6",
            dark: "#3f4b5b", 
          },
        },
        text: {
          light: "#1A1A1A",
          dark: "#F3F3F3",
        },
        nav: {
          light: "#787D84",
          dark: "#B4CED5", 
        },
        bg1: {
          light: "#f8f7f9",
          dark: "#292e33", // you can customize this dark background
        },
        bg:{
          light: "#F0F0F0",
          dark: "#1b1f23", // you can customize this dark background
        },
        input_bg:{
          light: "#e9edf1",
          dark: "#3e4346", // you can customize this dark background
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
