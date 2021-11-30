module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'warn',
    curly: ['error', 'all'],
    yoda: 'warn',
    'linebreak-style': 'off',
    'default-case': 'warn',
    'no-implicit-coercion': 'warn',
    'no-var': 'warn',
    'vue/no-unused-vars': 'off',
    'max-len': 'off'
  }
}