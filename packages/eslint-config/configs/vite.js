import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

import baseConfig from './base.js';
import { restrictedImports } from '../rules/restricted-imports.js';

const viteConfig = tseslint.config(
  ...baseConfig,
  ...tailwind.configs['flat/recommended'],
  restrictedImports
);

export default viteConfig;
