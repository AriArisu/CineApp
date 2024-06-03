/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#7F54B5',
        '2': '#B085DA',
        '3': '#DEC2F4',
      }
    },
  },
  plugins: [],
}
