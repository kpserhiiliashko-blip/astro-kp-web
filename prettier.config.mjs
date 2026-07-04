'use strict';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  semi: true,
};

export default config;
