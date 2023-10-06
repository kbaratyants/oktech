const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  safelist: [
    "h-[290px]",
    "h-[375px]",
    "bg-grizzly",
    "hover:bg-grizzlyHover",
    "hover:bg-[#111111]",
    "hover:bg-primaryHover",
  ],
  theme: {
    screens: {
      md: "640px",
      lg: "906px",
    },
    extend: {
      fontFamily: {
        sans: ["OKSans"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primaryHover: "#F95A01",
        accent: "var(--color-accent)",
        grizzly: "#CACACA",
        grizzlyHover: "#ACACAC",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        primary: "var(--color-secondary)",
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      animation: {
        textAnimation: "textAnimation 75s linear infinite",
        starAnimation: "starAnimation 1.5s linear backwards",
      },
      keyframes: {
        textAnimation: {
          "0%": { transform: "translateZ(0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
        starAnimation: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(90deg)" },
        },
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss-fluid-type"),
    require("autoprefixer"),
    require("tailwindcss"),
  ],
  options: {
    safelist: ["px-4"],
  },
};
