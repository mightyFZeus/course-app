module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          back:'#141414',
          default:'#FAF2EA',
          hover:'#9D6C1B'
        },
        secondary:{
          default:'#AAA9A7',
          back:'#7C848C',
        
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
