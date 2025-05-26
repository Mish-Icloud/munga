/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom cyber colors for Digital Architect theme
        "cyber-cyan": "#00ffff",
        "cyber-purple": "#8b5cf6",
        "cyber-green": "#10b981",
        "cyber-orange": "#f97316",
        "cyber-pink": "#ec4899",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glitch: {
          "0%": {
            textShadow: "0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff, 0.025em 0.04em 0 #ffff00",
          },
          "15%": {
            textShadow: "0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff, 0.025em 0.04em 0 #ffff00",
          },
          "16%": {
            textShadow: "-0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff, -0.05em -0.05em 0 #ffff00",
          },
          "49%": {
            textShadow: "-0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff, -0.05em -0.05em 0 #ffff00",
          },
          "50%": {
            textShadow: "0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff, 0 -0.04em 0 #ffff00",
          },
          "99%": {
            textShadow: "0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff, 0 -0.04em 0 #ffff00",
          },
          "100%": {
            textShadow: "-0.05em 0 0 #00ffff, -0.025em -0.04em 0 #ff00ff, -0.04em -0.025em 0 #ffff00",
          },
        },
        "gradient-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff",
          },
          "50%": {
            boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        glitch: "glitch 1s linear infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "20px 20px",
      },
    },
  },
  plugins: [],
}
