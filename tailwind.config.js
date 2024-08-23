/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        KoHo: ["KoHo", "sans-serif"],
      },
      backgroundImage: {
        'painting': "url('/src/assets/images/background2560.png')",
      },
      colors: {
        'beige': '#E2D7BB',
        'brown': '#564E41',
        'transparent-beige': '#E2D7BB9A',
      }
    },
  },
  plugins: [],
}

