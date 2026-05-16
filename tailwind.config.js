/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Enterprise Navy — WCAG AAA on body text
        ink: {
          50: "#F4F7FB",
          100: "#E9EFF7",
          200: "#D7DEE8",
          300: "#B8C2D2",
          400: "#7E8DA5",
          500: "#475569",
          600: "#334155",
          700: "#1F2A44",
          800: "#13213B",
          900: "#0B1B33"
        },
        brand: {
          50: "#EEF4FF",
          100: "#DCE7FE",
          200: "#B9CFFD",
          400: "#5A88F2",
          500: "#0E5BD9",
          600: "#0A47AB",
          700: "#08387F"
        },
        accent: {
          cyan: "#22C3E6",
          cyanDark: "#0EA5C8"
        },
        // Dark navy surfaces — derived from the logo background
        surface: {
          0: "#050E22", // body / deepest
          1: "#0B1B33", // alt section
          2: "#122847", // card
          3: "#1A3460"  // hover / elevated
        },
        success: "#22C55E",
        warn: "#F59E0B",
        danger: "#EF4444"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(34,195,230,0.35)",
        card: "0 1px 2px rgba(0,0,0,0.25), 0 10px 30px -12px rgba(0,0,0,0.45)",
        cardHover: "0 2px 4px rgba(0,0,0,0.3), 0 20px 45px -16px rgba(14,91,217,0.45)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,195,230,0.18), rgba(14,91,217,0.10) 35%, transparent 70%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseSoft: {
          "0%,100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.05)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
