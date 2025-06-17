module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGrid: {
          "0%, 100%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "10px 10px" },
        },
        fadeBlob: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(20px, -10px) scale(1.1)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        scrollX: "scrollX 90s linear infinite",
        pulseGrid: "pulseGrid 10s ease-in-out infinite",
        fadeBlob: "fadeBlob 8s ease-in-out infinite alternate",
        orbit: "orbit 20s linear infinite",
      },
    },
  },
  plugins: [],
};