import '@emotion/react';
import { I_Theme } from 'styles/theme';

declare module '@emotion/react' {
  export interface Theme extends I_Theme {}
}
