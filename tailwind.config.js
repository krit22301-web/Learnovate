/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-dark': {
          50: '#1a1a2e',
          100: '#16213e',
          200: '#0f3460',
          300: '#1a1a2e'
        },
        'space-purple': {
          500: '#6a5acd',
          600: '#5b3fbf',
          700: '#4b0082'
        }
      },
      fontFamily: {
        'space': ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        'cosmic-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'space-glow': {
          '0%, 100%': { filter: 'brightness(100%)' },
          '50%': { filter: 'brightness(120%)' }
        },
        'pulse-cosmic': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'cosmic-shimmer': {
          '0%': { opacity: '0.7' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.7' }
        }
      },
      animation: {
        'cosmic-float': 'cosmic-float 3s ease-in-out infinite',
        'space-glow': 'space-glow 2s infinite alternate',
        'pulse-cosmic': 'pulse-cosmic 2s infinite',
        'cosmic-shimmer': 'cosmic-shimmer 3s infinite'
      },
      boxShadow: {
        'cosmic': '0 10px 25px rgba(0, 0, 0, 0.3)',
        'nebula': '0 4px 6px rgba(106, 90, 205, 0.2)'
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to right, #1a1a2e, #16213e)',
        'cosmic-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
      }
    },
  },
  plugins: [],
}