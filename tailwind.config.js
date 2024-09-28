/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/**/*.svelte"],
  theme: {
    extend: {
      colors:{
        primary: "#151515",
        text:"#1e1e1e",
        secondary:"#ffaa00"
      }
    },
  },
  plugins: [],
}

