import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#89A8B2",
        "gray-blue": "#B3C8CF",
        "dark-cream": "#E5E1DA",
        cream: "#F1F0E8",
        green: "#CCD5AE",
        "light-green": "#E9EDC9",
        brown: "#D4A373",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
