import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-family)', 'sans-serif'] },
    },
    colors: {
      inherit: 'inherit',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      ...['primary', 'neutral', 'danger', 'secondary'].reduce(
        (obj, colorName) => ({
          ...obj,
          [colorName]: [
            50,
            ...[...Array(9).keys()].map(key => (key + 1) * 100),
            950,
          ].reduce(
            (obj, shade) => ({
              ...obj,
              [shade]: `rgb(var(--color-${colorName}-${shade}) / <alpha-value>)`,
              main: `rgb(var(--color-${colorName}-main) / <alpha-value>)`,
              light: `rgb(var(--color-${colorName}-light) / <alpha-value>)`,
              dark: `rgb(var(--color-${colorName}-dark) / <alpha-value>)`,
              contrast: `rgb(var(--color-${colorName}-contrast) / <alpha-value>)`,
            }),
            {}
          ),
        }),
        {}
      ),
    },
  },
  plugins: [],
};
export default config;
