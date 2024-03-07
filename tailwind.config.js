/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light_linear': '#F8BFBF',
        'dark_linear': '#EE8B8B',
        'dark': '#423A3A',
        'gray_linear': '#CE9898',
        'linear': '#EE8B8B',
        'redError': '#F96464',
        'textSuccess': "green"
      },
      letterSpacing: {
        wide: '0.25em',
      },
    },

  },
  plugins: [],
}

