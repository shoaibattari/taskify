/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        // custom breakpoints
        "s-phone": "319px", // --breakpoint-s_phone
        "m-phone": "374px", // --breakpoint-m_phone
        phone: "429px", // --breakpoint-phone
        tablet: "767px", // --breakpoint-tablet
        "laptop-sm": "900px", // --breakpoint-laptop-sm
        laptop: "1023px", // --breakpoint-laptop
        desktop: "1439px", // --breakpoint-desktop
        "4k": "1920px", // --breakpoint-_4k
      },
      colors: {
        primary: "#FFB86F", // --color-primary
        secondary: "#C78C4E", // --color-secondary
        grey: "#333333", // --color-grey
        "light-grey": "#BCBCBC", // --color-light-grey
        red: "#EF0000", // --color-red
        green: "#45B369", // --color-green
        blue: "#059AFF", // --color-blue
        orange: "#EF4A00", // --color-orange
        peach: "#F6DDC5",
      },
      backgroundImage: {
        // --color-gold-gradient-soft
        "gold-soft-gradient":
          "linear-gradient(180deg, #ffdab3 0%, #f6b066 100%)",

        // --color-gold-gradient-rich
        "gold-rich-gradient":
          "linear-gradient(180deg, #FAC99C 0%, #F7B066 100%)",
      },
      keyframes: {
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(1.5rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeSlide: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-right": "fade-in-right 0.4s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.3s ease-out forwards",
        "fade-slide": "fadeSlide 0.5s ease-in-out",
      },
      boxShadow: {
        custom: "0px 4px 30px 0px #2E2D740D",
      },
      backdropBlur: {
        custom: "10px",
      },
    },
  },
  plugins: [],
};
