/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        'xs': '414px',
        "sm" : "480px"
      }
    },
    fontFamily:{
      roboto:[ 'Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

