module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    colors: {
      gold: {
        'normal': '#FEBD59',
        'hover': '#FEBD59',
        'disabled': '#FFD38E',
      },
      white: {
        'normal': '#F1F1F1',
        'hover': '#FFFFFF',
        'disabled': '#9B9B9B',
      },
      black: {
        'background': '#000F1A',
        'card': '#001624',
        'decoration': '#011C2E',
      },
    },
    fontFamily: {
      sans: ['Hind'],
      display: ['Montserrat']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
  ]
}
