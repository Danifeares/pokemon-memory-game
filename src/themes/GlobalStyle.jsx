import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('background-image.jpg');
    background-size: cover;
    min-height: 100vh;
    width: 100%;
  }
`