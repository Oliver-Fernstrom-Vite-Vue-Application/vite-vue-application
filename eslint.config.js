import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],

    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },

    plugins: {
      vue: pluginVue,
    },

    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginVue.configs["flat/recommended"].rules,
    },
  },
];
