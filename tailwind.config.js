/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'turquoise': {
          100: '#b3e7f3',
          200: '#8cdff0',
          300: '#66d7ed',
          400: '#3fd0ea',
          500: '#41acd9',
          600: '#2f97c1',
          700: '#2a8bb3',
          800: '#257fa5',
        },
      },
    },
  },
  plugins: [],
};