import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

import baseConfig from './base.js';

const viteConfig = tseslint.config(
  ...baseConfig,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...tailwind.configs['flat/recommended'],

  {
    plugins: { 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
  }
);

export default viteConfig;
