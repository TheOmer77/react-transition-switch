import { defineConfig } from 'tsup';

const config = defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    external: ['react', 'react-dom'],
    sourcemap: 'inline',
    clean: true,
    dts: false,
    minify: true,
    splitting: false,
    treeshake: true,
  },
  // Workaround for dts composite error
  // https://github.com/egoist/tsup/issues/571#issuecomment-1146858670
  {
    entry: { index: 'dts/index.d.ts' },
    dts: { only: true },
  },
]);

export default config;
