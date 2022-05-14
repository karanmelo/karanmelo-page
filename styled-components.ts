import { lightTheme } from './src/styles/themes';

type CustomTheme = typeof lightTheme;

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}
