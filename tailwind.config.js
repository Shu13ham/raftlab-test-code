/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6c62dd',
        'secondary': '#d2cff8',
        'grey-lines': '#f0f0f0',
        'grey-text': '#999'
      }
    }
  },
  plugins: [],
}

