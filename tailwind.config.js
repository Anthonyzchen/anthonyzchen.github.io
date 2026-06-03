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
        Fraunces: ["Fraunces", "Georgia", "serif"],
      },
      fontSize: {
        // Fluid scale — clamp(min, preferred, max). Established by the Hero pilot.
        display: [
          "clamp(3.25rem, 11vw, 9.5rem)",
          { lineHeight: "0.92", letterSpacing: "-0.025em" },
        ],
        eyebrow: [
          "clamp(0.7rem, 0.9vw, 0.8rem)",
          { lineHeight: "1", letterSpacing: "0.32em" },
        ],
        lede: ["clamp(1rem, 1.35vw, 1.2rem)", { lineHeight: "1.7" }],
      },
      spacing: {
        gutter: "clamp(1.5rem, 5vw, 6rem)",
      },
      transitionTimingFunction: {
        ink: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        'painting': "url('/src/assets/images/background2560.webp')",
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
