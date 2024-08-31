import plugin from 'tailwindcss/plugin';
//@ts-expect-error No type decleration
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export const stateLayer = plugin(({ addUtilities, matchUtilities, theme }) => {
  const themeColors = flattenColorPalette(theme('colors'));
  addUtilities({
    '.state-layer': {
      position: 'relative',
      overflow: 'hidden',
      '&.fixed': { position: 'fixed' },
      '&.absolute': { position: 'absolute' },
      '&::after': {
        content: '""',
        position: 'absolute',
        insetBlockStart: '0',
        insetInlineStart: '0',
        width: '100%',
        height: '100%',
        zIndex: '1',
        transition: 'background-color 75ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  });
  matchUtilities(
    { 'state-layer': value => ({ '&::after': { backgroundColor: value } }) },
    { values: themeColors, type: 'color' }
  );
});
