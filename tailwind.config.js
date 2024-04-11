/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customPurple: 'rgb(102, 90, 236)'

      }
    },
  },
  plugins: [],
}