/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F82C08',
        'secundary': '#F8096C',
        'dark-color': '#383939',
        'white-color': '#fff',
      }
    },
  },
  plugins: [],
}

