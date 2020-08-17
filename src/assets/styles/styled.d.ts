import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      background: string;
      secundaryBackground: string;
      border: string;
      text: string;
      title: string;
      subTitle: string
      buttonBackground: string;
    }
  } 
}