import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

div {
  box-sizing: border-box;
}

button, select{
  text-transform: none;
}
button{
  border:none;
  background:none;
  padding: 4px 8px;
 &:hover{
  cursor: pointer;
  font-weight: bold;
 }
  
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0px;
}
`;
export default GlobalStyle;
