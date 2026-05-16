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
        deepnavy: "#031B3F",
        navy: "#062B5F",
        royal: "#0B4FAF",
        gold: "#F5B400",
        orange: "#F97316",
        redorange: "#E5391F",
        lightbg: "#F5F7FA",
        ink: "#0F172A",
        bordergray: "#E5E7EB",
        line: "#E5E7EB",
      },
      boxShadow: {
        premium: "0 22px 60px rgba(3, 27, 63, 0.16)",
        card: "0 16px 40px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "cebu-sunrise":
          "linear-gradient(135deg, rgba(245,180,0,0.94), rgba(249,115,22,0.9))",
        "hero-overlay":
          "linear-gradient(90deg, rgba(3,27,63,0.96) 0%, rgba(3,27,63,0.82) 34%, rgba(6,43,95,0.46) 63%, rgba(6,43,95,0.18) 100%)",
      },
      maxWidth: {
        screen: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
