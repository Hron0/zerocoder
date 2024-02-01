/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#FFFFFF",
        'secondary': '#FCFCFC',
        'secondaryB': "#F1F1F1"
      }
    },
  },
  plugins: [],
}

