import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

// importing '@/config/tailwind' doesn't work here
import { autofillOverride, stateLayer } from './src/config/tailwind';

const shades = [50, ...[...Array(9).keys()].map(key => (key + 1) * 100), 950];

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'checkbox-check':
          'checkbox-check 300ms cubic-bezier(0.2, 1, 0.4, 1) forwards',
      },
      borderRadius: {
        lg: 'var(--border-radius)',
        md: 'calc(var(--border-radius) - 2px)',
        sm: 'calc(var(--border-radius) - 4px)',
      },
      fontFamily: { sans: ['var(--font-family)', 'sans-serif'] },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'checkbox-check': {
          from: { strokeDashoffset: '-22.627416610717773px' },
          to: { strokeDashoffset: '0' },
        },
      },
      spacing: { em: '1em', inherit: 'inherit' },
    },
    colors: ['primary', 'neutral', 'danger', 'secondary'].reduce(
      (obj, colorName) => ({
        ...obj,
        [colorName]: [...shades].reduce(
          (obj, shade) => ({
            ...obj,
            [shade]: `rgb(var(--color-${colorName}-${shade}) / <alpha-value>)`,
          }),
          {
            DEFAULT: `rgb(var(--color-${colorName}))`,
            foreground: `rgb(var(--color-${colorName}-foreground))`,
          }
        ),
      }),
      {
        inherit: 'inherit',
        white: '#fff',
        black: '#000',
        transparent: 'transparent',

        border: 'rgb(var(--color-border))',
        input: {
          DEFAULT: 'rgb(var(--color-input))',
          active: 'rgb(var(--color-input-active))',
        },
        ring: 'rgb(var(--color-ring))',
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        muted: {
          DEFAULT: 'rgb(var(--color-muted))',
          foreground: 'rgb(var(--color-muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))',
          foreground: 'rgb(var(--color-accent-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--color-popover))',
          foreground: 'rgb(var(--color-popover-foreground))',
        },
        card: {
          DEFAULT: 'rgb(var(--color-card))',
          foreground: 'rgb(var(--color-card-foreground))',
        },
      }
    ),
  },
  plugins: [animate, autofillOverride, stateLayer],
} satisfies Config;
export default config;
