module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
      "no-console": "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/require-valid-default-prop": "off",
      "vue/no-use-v-if-with-v-for": "off",
      "vue/return-in-computed-property": "off",
      "vue/no-unused-components": "off",
      "vue/require-prop-type-constructor": "off",
      "vue/no-side-effects-in-computed-properties": "off",
      "vue/no-parsing-error": "off",
      "vue/no-unused-vars": 'off',
      "no-unused-vars": "off",
      "no-control-regex": "off",
      "no-useless-escape": "off",
      "no-undef": "off",
      "no-empty": "off"
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  }