/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {
    
    },},
    variants: {
      extend: {
        appearance: ['responsive', 'hover', 'focus'],
      },
    },
  
  plugins: [],
}

