module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 2021,
  },
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
    "plugin:n/recommended",
  ],
  rules: {
    "quotes": ["error", "double"],
    "n/no-unsupported-features/es-syntax": ["error", "warn"],
  },
};
