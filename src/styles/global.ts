import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue} ;
  outline: 0;
}

body,input,button,textarea{
  font:400 1rem Poppins, sans-serif;
}

body{
  -webkit-font-smoothing:antialiased;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["blue-800"]};
}

`;
