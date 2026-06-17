import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        coal: "#111111",
        graphite: "#1f1f1f",
        steel: "#6f7378",
        champagne: "#d6b25e",
        gold: "#b88a2a",
        ivory: "#f7f4ec",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        gold: "0 24px 70px rgba(184, 138, 42, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
