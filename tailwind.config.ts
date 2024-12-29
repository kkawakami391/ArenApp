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
      },
    },
  },
  plugins: [],
} satisfies Config;
