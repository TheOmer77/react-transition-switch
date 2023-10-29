import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-family)', 'sans-serif'] },

      animation: {
        'sharedAxis-left-in': `sharedAxis-fade-preIn 90ms,
sharedAxis-fade-in 210ms cubic-bezier(0, 0, 0.2, 1) 90ms,
sharedAxis-left-in 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-left-out': `sharedAxis-fade-out 90ms cubic-bezier(0.4, 0, 1, 1),
sharedAxis-left-out 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-right-in': `sharedAxis-fade-preIn 90ms,
sharedAxis-fade-in 210ms cubic-bezier(0, 0, 0.2, 1) 90ms,
sharedAxis-right-in 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-right-out': `sharedAxis-fade-out 90ms cubic-bezier(0.4, 0, 1, 1),
sharedAxis-right-out 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-up-in': `sharedAxis-fade-preIn 90ms,
sharedAxis-fade-in 210ms cubic-bezier(0, 0, 0.2, 1) 90ms,
sharedAxis-up-in 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-up-out': `sharedAxis-fade-out 90ms cubic-bezier(0.4, 0, 1, 1),
sharedAxis-up-out 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-down-in': `sharedAxis-fade-preIn 90ms,
sharedAxis-fade-in 210ms cubic-bezier(0, 0, 0.2, 1) 90ms,
sharedAxis-down-in 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
        'sharedAxis-down-out': `sharedAxis-fade-out 90ms cubic-bezier(0.4, 0, 1, 1),
sharedAxis-down-out 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      keyframes: {
        'sharedAxis-fade-preIn': {
          from: { opacity: '0' },
          to: { opacity: '0' },
        },
        'sharedAxis-fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'sharedAxis-fade-out': { from: { opacity: '1' }, to: { opacity: '0' } },
        'sharedAxis-left-in': {
          from: { transform: 'translateX(30px)' },
          to: { transform: 'translateX(0)' },
        },
        'sharedAxis-left-out': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-30px)' },
        },
        'sharedAxis-right-in': {
          from: { transform: 'translateX(-30px)' },
          to: { transform: 'translateX(0)' },
        },
        'sharedAxis-right-out': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(30px)' },
        },
        'sharedAxis-up-in': {
          from: { transform: 'translateY(30px)' },
          to: { transform: 'translateY(0)' },
        },
        'sharedAxis-up-out': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-30px)' },
        },
        'sharedAxis-down-in': {
          from: { transform: 'translateY(-30px)' },
          to: { transform: 'translateY(0)' },
        },
        'sharedAxis-down-out': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(30px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
