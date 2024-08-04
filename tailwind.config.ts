import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    boxShadow: {
      header: "0px 4px 20px 0px #0000000D",
      button: "0px 0px 10px 0px #0940CB",
      main: "0px 0px 4px 0px #00000040",
      social: "0px 0px 3px 0px #0940CB",
      
    },
    borderWidth: {
      5: "5px",
    },
    colors: {
      white: { DEFAULT: "#ffffff" },
      primary: {
        DEFAULT: "#1A54EA",
        hover: "#0940CB",
        dark: "#151F51",
      },
      gray: {
        ea: "#EAEAEA",
        49: "#494949",
        f1: "#F1F5F8",
        66: "#666666",
      },
      dark: {
        36: "#363636",
        "2d": "#2D2D2D",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
