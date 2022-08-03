import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root, #__next {
    min-height: 100%;
    height: 100%;
    ${({ gradientColors }) =>
      gradientColors &&
      css`
        background: ${gradientColors} !important;
      `}
   
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
