module.exports = {
  extends: ['airbnb', 'prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },

  overrides: [
    {
      files: 'packages/**/*test.js',
      env: {
        jest: true,
      },
    },
  ],
};
