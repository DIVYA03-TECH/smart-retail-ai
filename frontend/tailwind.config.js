/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        signal: {
          50: "#EEF1FF",
          400: "#5B75FF",
          500: "#3D5AFE",
          600: "#2A3FE0",
          700: "#2030B3",
        },
        current: {
          50: "#EAEBF3",
          400: "#2A335C",
          500: "#1B2140",
          600: "#12162C",
        },
        ember: {
          50: "#FFEFE7",
          400: "#FF8F60",
          500: "#FF7A45",
          600: "#E85F28",
        },
        ink: {
          DEFAULT: "#101425",
          400: "#3A4058",
        },
        canvas: "#F6F7FB",
        border: "#E4E7F1",
        muted: "#6B7186",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },

      backgroundImage: {
        "scan-line":
          "linear-gradient(90deg, transparent 0%, #3D5AFE 25%, #FF7A45 50%, #3D5AFE 75%, transparent 100%)",
      },

      keyframes: {
        scan: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      animation: {
        scan: "scan 3s linear infinite",
      },
    },
  },
  plugins: [],
};