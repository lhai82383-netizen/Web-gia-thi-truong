/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003399', // Dark Blue
        'price-up': '#16a34a', // Green (green-600) for better contrast
        'price-down': '#dc2626', // Red (red-600)
      },
    },
  },
  plugins: [],
}
