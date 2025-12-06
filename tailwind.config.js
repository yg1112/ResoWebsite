/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fall': 'fall 8s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'wave': 'wave 1s ease-in-out infinite',
        'drop': 'drop 1s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fall: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(300px)', opacity: '0' },
        },
        scan: {
          '0%, 100%': { top: '0%', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        wave: {
          '0%, 100%': { height: '10px' },
          '50%': { height: '30px' },
        },
        drop: {
          '0%': { top: '0', opacity: '1', height: '10px' },
          '100%': { top: '100%', opacity: '0', height: '30px' },
        }
      }
    },
  },
  plugins: [],
}