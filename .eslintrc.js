module.exports = {
  extends: ["plugin:vue/vue3-recommended", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/max-attributes-per-line": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {},
    },
  ],
};
