import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
      --cl-green: #48a770;
      --cl-white: #fff;
      --cl-wheat:#f3efe0;
      --transition: all 0.3s linear;
   }
   *, :after, :before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body {
      h1 {
         font-size: 2rem;
         font-weight: 600;
      }
      a {
         text-decoration: none;
      }
      a,p,h1 {
         color: var(--cl-green)
      }

   }
  
`;