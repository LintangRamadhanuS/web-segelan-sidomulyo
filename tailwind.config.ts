import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet warna khas desa - earthy & traditional
        tanah:  { DEFAULT: "#5c4b32", light: "#7a6245", dark: "#3d3020" },
        hijau:  { DEFAULT: "#4a7c59", light: "#6aa37a", dark: "#2f5439" },
        emas:   { DEFAULT: "#c8a45a", light: "#e0c07e", dark: "#9e7e3c" },
        krem:   { DEFAULT: "#f5f0e8", dark: "#e8e0d0" },
        coklat: { DEFAULT: "#8b5e3c", light: "#a87850", dark: "#6b4428" },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease-out forwards",
        "fade-in":   "fadeIn 0.5s ease-out forwards",
        "count-up":  "countUp 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
