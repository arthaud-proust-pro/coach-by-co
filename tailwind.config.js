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
        'hover': '#FEB037',
        'disabled': '#FFD38E',
      },
      white: {
        'normal': '#F1F1F1',
        'hover': '#FFFFFF',
        'disabled': '#9B9B9B',
      },
      black: {
        'background': '#0C0C0C',
        'card': '#151515',
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
