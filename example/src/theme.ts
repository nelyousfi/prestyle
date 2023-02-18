import {prestyle} from 'react-native-prestyle';

const {useTheme, ThemeProvider, ThemedView, Text, useBreakPoint} = prestyle({
  light: {
    colors: {
      primary: 'blueviolet',
      secondary: 'crimson',
    },
    spacing: {
      s: {
        phone: 10,
        tablet: 100,
      },
      m: 16,
      l: 32,
    },
    breakPoints: {
      phone: 0,
      tablet: 100,
    },
  },
  dark: {
    colors: {
      primary: 'deepskyblue',
      secondary: 'gold',
    },
    spacing: {
      s: {
        phone: 10,
        tablet: 50,
      },
      m: 16 * 2,
      l: 32 * 2,
    },
    breakPoints: {
      phone: 0,
      tablet: 100,
    },
  },
});

export {useTheme, ThemeProvider, ThemedView, Text, useBreakPoint};
