/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          primary: '#2D3047',
          'primary-light': '#3A3E5C',
          'primary-dark': '#1F2132',
          secondary: '#419D78',
          'secondary-light': '#4CAF89',
          'secondary-dark': '#368B67',
          accent: '#E0A458',
          'accent-light': '#E5B876',
          'accent-dark': '#D89039',
          background: '#F5F5F5',
          'background-light': '#FAFAFA',
          text: '#2D3047',
        },
      },
    },
  },
  plugins: [],
}