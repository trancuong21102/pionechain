// import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import tailwindcssAnimate from "tailwindcss-animate";
 

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pione_chain0: "url('/background/pione_chain0.png')",
        home_mb: "url('/background/home_mb.png')",
        home_pc: "url('/background/home_pc.png')",
        footer: "url('/background/footer.png')",
        "gradient-orange":
          "linear-gradient(104.29deg, rgba(231, 78, 27, 0.3) -14.71%, rgba(2, 1, 32, 0.5) 53.21%)",
        "gradient-card":
          "linear-gradient(180deg, rgba(39, 6, 6, 0.5) 0%, rgba(25, 25, 25, 0.3) 100%)",
        "gradient-red":
          "linear-gradient(90deg, rgba(25, 25, 25, 0) 0%, rgba(231, 64, 65, 0.5) 51%, rgba(25, 25, 25, 0) 100%)",
        "gradient-footer":
          "linear-gradient(-61.97deg, #712216 -15.31%, #191919 38.26%)",
        "gradient-backdrop-red":
          "linear-gradient(180deg, rgba(39, 6, 6, 0.5) 0%, rgba(25, 25, 25, 0.8) 100%);",
      },
      colors: {
        dark: "#191919",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        dgray: "#1f1f1f",
        dred: "#3d1f1fc4",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "fade-in-haftLeftReimagined":
          "fade-in-haftLeftReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftBottomtReimagined":
          "fade-in-haftBottomtReimagined 30s ease-in-out infinite alternate",
        "fade-in-haftLeftTestimonialReimagined":
          "fade-in-haftLeftTestimonialReimagined 14s ease-in-out infinite alternate",
        "fade-in-haftRightTestimonialReimagined":
          "fade-in-haftRightTestimonialReimagined 14s ease-in-out infinite alternate",
        "fade-in-haftCenterReimagined":
          "fade-in-haftCenterReimagined 14s ease-in-out infinite alternate",
        marquee: "marquee var(--duration, 30s) linear infinite",
		"marquee-reverse": "marquee-reverse var(--duration, 30s) linear infinite"
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
		"marquee-reverse": {
          to: { transform: "translateX(50%)" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "fade-in-haftLeftTestimonialReimagined": {
          "0%": {
            bottom: "-50%",
            left: "-10%",
          },
          "33%": {
            bottom: "-50%",
            left: "-20%",
          },
          "66%": {
            bottom: "-50%",
            left: "-32%",
          },
          "100%": {
            bottom: "-50%",
            left: "10%",
          },
        },
        "fade-in-haftRightTestimonialReimagined": {
          "0%": {
            bottom: "-50%",
            right: "-10%",
          },
          "33%": {
            bottom: "-50%",
            right: "-20%",
          },
          "66%": {
            bottom: "-50%",
            right: "-32%",
          },
          "100%": {
            bottom: "-50%",
            right: "10%",
          },
        },
        "fade-in-haftCenterReimagined": {
          "0%": {
            bottom: "-40%",
            left: "40%",
          },
          "33%": {
            bottom: "-40%",
            left: "30%",
          },
          "66%": {
            bottom: "-40%",
            left: "20%",
          },
          "100%": {
            bottom: "-40%",
            left: "60%",
          },
        },
        "fade-in-haftRightReimagined": {
          "0%": {
            bottom: "-40%",
            left: "40%",
          },
          "33%": {
            bottom: "-40%",
            left: "30%",
          },
          "66%": {
            bottom: "-40%",
            left: "20%",
          },
          "100%": {
            bottom: "-40%",
            left: "60%",
          },
        },
        "fade-in-haftLeftReimagined": {
          "0%": {
            top: "9%",
            left: "12%",
          },
          "33%": {
            top: "22%",
            left: "5%",
          },
          "66%": {
            top: "11%",
            left: "9%",
          },
          "100%": {
            left: "25%",
            top: "8%",
          },
        },
        "fade-in-haftBottomtReimagined": {
          "0%": {
            bottom: "3%",
            right: "33%",
          },
          "33%": {
            bottom: "10%",
            right: "5%",
          },
          "66%": {
            bottom: "4%",
            right: "35%",
          },
          "100%": {
            bottom: "12%",
            right: "7%",
          },
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [heroui(), tailwindcssAnimate],

};
export default config;
