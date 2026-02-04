/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'truck-blue': {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0066cc',  // Professional bright blue
          600: '#0052a3',
          700: '#003d7a',
          800: '#1a3a52',  // Deep navy for headers
          900: '#0d1f2d',  // Darkest navy
        },
        'truck-orange': {
          400: '#ff8547',
          500: '#ff6200',  // Vibrant safety orange - more visible
          600: '#e65500',
          700: '#cc4a00',
        },
      },
    },
  },
  plugins: [],
}
