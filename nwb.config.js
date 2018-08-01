module.exports = {
  type: 'web-module',
  npm: {
    esModules: false,
    umd: false
  },
  babel: {
    presets: ['flow', 'env']
  }
}
