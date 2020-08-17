import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;

    font-family: 'Roboto';
  }

  body, html, #root {
    background-color: ${props => props.theme.colors.background};

    height: 100vh;
    width: 100vw;

    color: ${props => props.theme.colors.text}
  }

  .button {
    background-color: ${props => props.theme.colors.primary};
    border: 0;
    border-radius: 4px;
    color: #fff;
  }
`;