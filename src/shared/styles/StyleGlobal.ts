import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* overflow-x: hidden; */
  };

  img {
    flex-shrink: 1;
  }
`;