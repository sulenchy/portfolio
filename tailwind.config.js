module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundImage: {
         'about-image': "url('/src/bg.jpeg')",
        }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}
