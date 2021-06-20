module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2021,
  },
  'plugins': [],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'lines-between-class-members': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'import/prefer-default-export': 'off',
    'quotes': ['error', 'single'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],
  },
};
