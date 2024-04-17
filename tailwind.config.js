/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        dark: {
          50: '#dcdce1',
          100: '#d2d2d7',
          200: '#b4b4b9',
          300: '#96969b',
          400: '#78787d',
          500: '#5f5f64',
          600: '#46464b',
          700: '#2d2d32',
          800: '#1e1e23',
          900: '#141418',
          950: '#0e0e10',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    },
  },
  plugins: [],
}