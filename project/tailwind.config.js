/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'flicker': 'flicker 0.5s ease-in-out infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 40px #ff4da6' }
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff' },
          '20%, 24%, 55%': { textShadow: 'none' }
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cyberpunk"],
  },
};