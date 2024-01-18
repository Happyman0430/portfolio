/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dancing: 'Dancing Script',
      },
      brightness: {
        25: '.25',
        40: '.4',
      }
    },

  },
  plugins: [require("daisyui")],
}

