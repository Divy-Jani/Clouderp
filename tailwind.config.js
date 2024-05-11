/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
     orangee:'#ff521b',
     yelloww:'#fffce2',
     bluish: ' #f5f6ff',
     lavendar:'#8090df',
     pinkish: '#b86d9a'

    },
    
    extend: {
      fontFamily:{
        'DM': [ "DM Sans", 'sans-serif'],
        'Lato': [ "Lato",  'sans-serif']
      }
    },
  },
  plugins: [],
}

