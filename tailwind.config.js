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
        'dark-beige': '#DACEAB',
        'transparent-beige': '#E2D7BB9A',
        'ink': '#2C2825',
        'vermillion': '#C23B3B',
        'terracotta': '#A65D4C',
        'jade': '#5B7E6B',
        'gold': '#B8964B',
        'mist': '#F5F2EB',
      },
    },
  },
  plugins: [],
}
