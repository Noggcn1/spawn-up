module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Suas regras personalizadas, se houver.
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', 'components/ui/'],
};
