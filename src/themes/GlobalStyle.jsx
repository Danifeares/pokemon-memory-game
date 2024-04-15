import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.gif'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
  }
  button {
    background-color: #e369c1;
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 16px;
    border: none;
    cursor: pointer;
    color: #f6f6f6;
    width: 100%;
    height: 50px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
    transition: 300ms ease-in-out;
  
    &:hover {
      background-color: #bd5aa1;
      transform: scale(1.01);
    }
  }
`