/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    
    fontFamily: {
      "poppins": "Poppins"
    },
    extend: {
      colors: {
        "primary": "#3B939B",
        "secondary": "#C9FBFF",
        "gray": "#273444"
      }
    },
  },
  plugins: [
    require('autoprefixer')
  ],
}
