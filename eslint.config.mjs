import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  ...eslintPluginAstro.configs.recommended,

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  {
    rules: {
      "quotes": "off",
      "semi": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "off",
    },
  },

  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "tailwind.config.cjs",
    ],
  },
];
