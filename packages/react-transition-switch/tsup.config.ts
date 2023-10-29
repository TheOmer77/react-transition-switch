import { defineConfig } from 'tsup';

const config = defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
});

export default config;
