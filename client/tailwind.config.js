/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        "form": "200px 1fr",
      }
    },
  },
  plugins: [],
}