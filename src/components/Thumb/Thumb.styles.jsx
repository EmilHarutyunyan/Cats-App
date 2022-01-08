import styled from "styled-components";

export const Article = styled.article`
  width: 100%;
  background-color: var(--cl-green);
  padding: 0.6rem;
  border-radius: 40px;
`;

export const Content = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 40px;
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 20px;
    transition: all 0.3s;
    animation: animateThumb 0.5s;
    cursor: pointer;
    object-fit: cover;
    :hover {
        opacity: 0.8;
        transform: scale(1.1);
    }
   @keyframes animateThumb {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`;