module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center:true,
      // padding:'2rem'
    },
    extend: {
      minWidth: {
        '300': '500px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
