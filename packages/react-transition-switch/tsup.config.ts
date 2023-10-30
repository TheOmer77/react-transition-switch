import { defineConfig } from 'tsup';

const config = defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom'],
  sourcemap: 'inline',
  clean: true,
  dts: true,
  minify: true,
  splitting: false,
  treeshake: true,
});

export default config;
