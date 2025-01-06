import eslint from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import { checkFile } from '../rules/check-file.js';
import { preferArrow } from '../rules/prefer-arrow.js';
import { preferTemplate } from '../rules/prefer-template.js';
import { sortImports } from '../rules/sort-imports.js';

const baseConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  prettier,

  checkFile,
  preferArrow,
  preferTemplate,
  sortImports,

  {
    plugins: { 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    languageOptions: {
      parserOptions: {
        ...react.configs.flat['jsx-runtime'].languageOptions.parserOptions,
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
      },
      globals: globals.browser,
    },
  },
  { ignores: ['.*.js', 'node_modules/', 'dist/'] }
);

export default baseConfig;
