import {createGlobalStyle} from "styled-components";

const GlobalStylesHTML = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  body{
    font-family: "Poppins";
    overflow-x: hidden;
    background-color: ${props => props.theme.white};
  }
  
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }

  a{
    color:inherit;
    text-decoration: none;
  }

`
export default GlobalStylesHTML;
