module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    listStyleType: {
       square: 'square',
    },
    extend: {
      backgroundImage: {
         'about-image': "url('/src/bg.jpeg')",
        },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}
