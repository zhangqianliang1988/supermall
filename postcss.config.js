module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportUnit: 'vw',
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      selectorBlackList: ['ignore'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
