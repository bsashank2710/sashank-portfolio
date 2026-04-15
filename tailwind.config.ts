import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#030712",
        surface: "#0d1117",
        "surface-2": "#161b22",
        border: "#1c1f26",
        "border-bright": "#2d3248",
        accent: "#00d4ff",
        violet: "#8b5cf6",
        sky: "#38bdf8",
        emerald: "#10b981",
        amber: "#f59e0b",
        text: "#f1f5f9",
        muted: "#8892a0",
        subtle: "#555e72",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SF Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0,212,255,0.25), 0 0 60px rgba(0,212,255,0.1)",
        "glow-violet": "0 0 30px rgba(139,92,246,0.25), 0 0 60px rgba(139,92,246,0.1)",
        card: "0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)",
        "card-hover": "0 2px 8px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
