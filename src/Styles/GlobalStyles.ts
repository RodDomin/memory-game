import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }



  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;