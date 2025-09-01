export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { 300:"#c084fc", 400:"#a78bfa", 500:"#8b5cf6", 600:"#7c3aed" }
      },
      boxShadow: {
        glow: "0 8px 30px rgba(139,92,246,.25)"
      }
    }
  },
  plugins: []
}
