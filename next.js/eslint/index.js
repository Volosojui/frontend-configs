module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'error',
    'import/order': [
      'error', { 
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 
        'newlines-between': 'always', 
      }, 
    ], 
  },
};
