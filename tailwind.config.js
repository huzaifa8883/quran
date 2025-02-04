/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c4a6e',
          light: '#38bdf8',
          dark: '#0e7490',
        },
      },
      boxShadow: {
        'strong': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
