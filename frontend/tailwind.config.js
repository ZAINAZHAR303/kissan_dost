/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppinsSemibold': ['semibold'],
        'poppinsMedium': ['Medium'],
        'poppinsRegular': ['Regular'],
        'poppinsLight': ['Light'],
        
      }

    },
  },
  plugins: [],
}

