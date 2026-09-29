import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic luxury romance palette
        noir: {
          DEFAULT: "#0c0a0b", // near-black
          soft: "#151112",
          raised: "#1c1517",
        },
        burgundy: {
          DEFAULT: "#4a1420",
          deep: "#330d15",
          light: "#6b1f2e",
        },
        ivory: {
          DEFAULT: "#f4ede2",
          dim: "#e5dbcb",
        },
        rose: {
          DEFAULT: "#b98a8f",
          muted: "#9c7276",
        },
        champagne: {
          DEFAULT: "#c9a86a",
          light: "#e0c88f",
          dim: "#a8895495",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -2%)" },
          "20%": { transform: "translate(-3%, 1%)" },
          "30%": { transform: "translate(2%, -3%)" },
          "40%": { transform: "translate(-2%, 3%)" },
          "50%": { transform: "translate(-3%, -1%)" },
          "60%": { transform: "translate(2%, 2%)" },
          "70%": { transform: "translate(3%, -2%)" },
          "80%": { transform: "translate(-1%, 3%)" },
          "90%": { transform: "translate(1%, 1%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-110vh) rotate(20deg)", opacity: "0" },
        },
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        drift: "drift 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
