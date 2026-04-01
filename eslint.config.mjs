export default [
  {
    files: ['**/*.js'],
    ignores: ['coverage/**', 'dist/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        expect: 'readonly',
        module: 'readonly',
        require: 'readonly',
        test: 'readonly',
      },
    },
    rules: {},
  },
];
