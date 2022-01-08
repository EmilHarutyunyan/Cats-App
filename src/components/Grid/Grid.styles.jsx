import styled from "styled-components"

export const Wrapper  = styled.div`
    text-align: center;
    h1 {
      color: var(--cl-green);
      padding: 1rem;
      @media screen and (max-width: 768px) {
         font-size: 1.5rem;
      }
   }
`;
export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    @media only screen and (max-width:700px) {
      margin: 0 auto;
    }
`;