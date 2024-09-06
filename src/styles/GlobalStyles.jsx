import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.main.background};
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
    max-width: 100vw;
    font-family: ${({ theme }) =>
      theme.main.fontFamily.primary}; /* Use primary font from theme */
    color: ${({ theme }) => theme.main.fonts.primary};
    transition: background-color 0.5s ease-in-out;
  }

  body {
    overflow-x: hidden;
    max-width: 100vw;
    background-color: ${({ theme }) => theme.main.background};
    transition: background-color 0.5s ease-in-out;
    font-family: ${({ theme }) =>
      theme.main.fontFamily.primary}; /* Use primary font from theme */
    padding: 0 5rem;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }
`;

export default GlobalStyles;
