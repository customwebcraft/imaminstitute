import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep":   "#0F2456",
        "navy":        "#1B3A7A",
        "navy-mid":    "#2952A3",
        "navy-light":  "#E8EEFF",
        "crimson":     "#C0392B",
        "crimson-dark":"#9B2C1F",
        "crimson-pale":"#FCECEA",
        "gold":        "#D4A017",
        "gold-pale":   "#FBF3DC",
        "off-white":   "#F9FAFB",
        "ink":         "#111827",
        "ink-muted":   "#4B5563",
        "ink-subtle":  "#9CA3AF",
        "border":      "#E5E7EB",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm:       ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;