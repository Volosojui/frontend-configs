module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'prettier/prettier': 'error',
  },
};
