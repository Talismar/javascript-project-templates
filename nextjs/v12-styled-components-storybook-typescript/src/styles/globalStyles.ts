import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* @font-face {
      font-family: 'Poppins-Bold';
      src: url('../../public/assets/fonts/Poppins-Bold.otf');
    }

    @font-face {
      font-family: 'Poppins';
      src: url('../../public/assets/fonts/Poppins-Regular.otf');
    } */

    body,
    html {
      font-size: 16px;
      background-color: red;
    }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Poppins';
}

  /* Setting Iphone */
  input::-webkit-date-and-time-value {
    text-align: left;
  }

`;

export default GlobalStyle;
