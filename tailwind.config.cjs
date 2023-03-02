/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    width:{
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      "10/12": "83.333333%",
      "11/12":"91.666667%",
      '580':"580px",
      'full': '100%',
      "235px":"235px",
      "420px":"420px",
      "630px":"630px",
      "980px":"980px"
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '580':"580px",
      'full': '100%',
    },
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [],
}
