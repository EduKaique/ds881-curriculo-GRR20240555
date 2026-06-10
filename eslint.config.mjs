// @ts-check
// Configuração do ESLint para projetos Astro com suporte a TypeScript e JSX

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // Regras base recomendadas do ESLint
  eslint.configs.recommended,

  // Regras recomendadas para TypeScript
  ...tseslint.configs.recommended,

  // Regras recomendadas para arquivos .astro
  ...eslintPluginAstro.configs.recommended,

  {
    rules: {
      // Permite o uso de 'any' sem erro (comum em projetos Astro com dados externos)
      "@typescript-eslint/no-explicit-any": "warn",
      // Garante ponto e vírgula
      semi: ["error", "always"],
      // Aspas simples
      quotes: ["error", "double"],
    },
  },

  {
    // Ignora pastas geradas automaticamente
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
];
