// Informando para o typescript as propriedades do tema
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      text: string;
      textHighlight: string;
      comment: {
        400: string;
        600: string;
        500: string;
        700: string;
      },
      black: {
        400: string;
        600: string;
        500: string;
        700: string;
      }
      cyan: {
        400: string;
        500: string;
        600: string
        700: string;
      },
      green: {
        400: string;
        500: string;
        600: string
        700: string;
      },
      orange: {
        400: string;
        500: string;
        600: string
        700: string;
      },
      pink: {
        400: string;
        500: string;
        600: string
        700: string;
      },
      purple: {
        400: string;
        500: string;
        600: string
        700: string;
      },
      red: {
        400: string;
        500: string;
        600: string
        700: string;
      },
      white: {
        400: string;
        500: string;
        600: string;
        700: string;
      },
      yellow: {
        400: string;
        500: string;
        600: string
        700: string;
      },
    },
    others: {
      boxShadow: string;
    },
    skeleton: {
      primary: string;
      secondary: string;
    },
    toast: {
      background: string;
      text: string;
    }
  }
}
