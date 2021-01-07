module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:wdio/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'wdio'
  ],
  // add your custom rules here
  rules: {}
}
