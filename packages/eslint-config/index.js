module.exports = {
  extends: [
    './airbnb-base/index',
    './rules/style',
  ].map(require.resolve),
  env: {
    browser: true,
  },
}
