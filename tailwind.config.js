export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
      colors: {
        brand: {
          50:'#faf5ff',100:'#f3e8ff',200:'#e9d5ff',300:'#d8b4fe',400:'#c084fc',
          500:'#a855f7',600:'#9333ea',700:'#7e22ce',800:'#6b21a8',900:'#581c87',950:'#3b0764'
        }
      },
      boxShadow: { glow: '0 0 40px 0 rgba(168,85,247,0.35)' },
      keyframes: {
        float: { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-8px)'} },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: { float: 'float 10s ease-in-out infinite', aurora: 'aurora 22s linear infinite' }
    },
  },
  plugins: [],
}
