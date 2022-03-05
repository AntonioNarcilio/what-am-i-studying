import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* a cada 1rem será considerado 10px */
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.6rem; // 16px
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 0rem;
      height: 0rem;
    }
  }

  body,
  input,
  textarea,
  button {
    font: 400 1.6rem "inter", sans-serif;
    font-display: swap;
  }

  a {
    color: inherit; /* herda a cor do container dos links */
    text-decoration: none;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
  }

`;
