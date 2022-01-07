module.exports = { 
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'no-empty-source': null,
    'string-quotes': 'double',
  },
};
