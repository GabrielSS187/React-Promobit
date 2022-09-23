import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* overflow-x: hidden; */
  };

  ul, ol {
    list-style: none;
  }

  img {
    flex-shrink: 1;
  }
`;