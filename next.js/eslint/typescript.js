module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: './*.{css,scss}',
            group: 'index',
            position: 'after',
          },
        ],
      },
    ],
  },
};
