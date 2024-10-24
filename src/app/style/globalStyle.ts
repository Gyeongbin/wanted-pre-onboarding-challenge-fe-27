import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
  }
  html{
      width: 100%;
      height: 100%;
      font-size: 62.5%;
      font-family: 'Pretendard';
      background-color: white;
  }
  body{
      width: 100%;
      height: 100%;
      font-size: 1.6rem;
      overflow-x: hidden;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  ul, ol, li {
      list-style: none;
  }
`;

export default GlobalStyle;
