module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort'],
  rules: {
    semi: ['error', 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-shadow': 'off',
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    'react-hooks/exhaustive-deps': 'off',
  },
}
