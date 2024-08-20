import {createGlobalStyle} from "styled-components";
import "./reset.css";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  body {
    background-color: ${({theme}) => theme.COLORS.DARK.DARK400};
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
    -webkit-font-smoothing: antialised;
  }
  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    outline: none
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
  li {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }

`;