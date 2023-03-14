module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "turbo",
    "prettier",
  ],
  plugins: ["react", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
