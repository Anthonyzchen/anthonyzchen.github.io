/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KoHo: ["KoHo", "sans-serif"],
      },
      backgroundImage: {
        painting: "url('/src/assets/images/background2560.png')",
      },
      colors: {
        beige: "#E2D7BB",
        brown: "#564E41",
        "dark-beige": "#DACEAB",
        "transparent-beige": "#E2D7BB9A",

        concrete: "#8B8B8B",
        "warm-gray": "#6B6B6B",
        cream: "#F7F5F0",
        "accent-gold": "#B8860B",
        "soft-brown": "#7A6B5A",
        "japandi-gray": "#9CA3AF",
        "minimal-beige": "#F5F3ED",
      },
    },
  },
  plugins: [],
};
