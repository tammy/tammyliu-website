import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-mono": ["var(--font-dm-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-dark": "#000129",
        "blue-medium": "#0B85DA",
        "yellow-gold": "#FAB52D",
        "graphite-bg": "#1c1917",
        "graphite-surface": "#292524",
        "graphite-heading": "#fafaf9",
        "graphite-body": "#d6d3d1",
        "graphite-muted": "#78716c",
      },
    },
  },
  plugins: [],
};
export default config;
