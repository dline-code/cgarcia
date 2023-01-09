import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html{
    min-height: 100%;
    background: var(--primary);
    scroll-behavior: smooth;
  }

  *, button, input{
    border: 0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    color: var(--black)
  }

  ul{
    list-style: none;
  }

  #root{
    margin: 0 auto;
  }
`;
