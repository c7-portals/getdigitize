/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root
    "./**/*.html",        // All HTML files in subfolders
    "./*.js",             // Any vanilla JS files
    "./**/*.js"           // JS in subfolders too
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',    // Lightest
          100: '#ede9fe',   // Lighter
          200: '#ddd6fe',   // Light
          300: '#c4b5fd',   // Light Medium
          400: '#a78bfa',   // Medium Light
          500: '#8b5cf6',   // Base
          600: '#7c3aed',   // Medium Dark
          700: '#6d28d9',   // Dark
          800: '#5b21b6',   // Darker
          900: '#4c1d95',   // Darkest
          950: '#3b0764'    // Deepest
        }
      }
    },
  },
  plugins: [],
};
