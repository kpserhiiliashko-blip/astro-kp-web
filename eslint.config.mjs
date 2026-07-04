import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,astro}'],
    plugins: {
      js,
      eslintPluginAstro,
    },
    extends: [js.configs.recommended, eslintPluginAstro.configs.recommended],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
]);
