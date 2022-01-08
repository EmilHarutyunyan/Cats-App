import styled from 'styled-components';

export const Section = styled.section`
  margin-left: 200px;
  text-align: center;
  h1 {
    font-size: 5rem;
    padding: 5rem;
    @media only screen and (max-width: 768px) {
      font-size: 2rem
    }
  }
  a {
    text-decoration: underline;
  }
  a,p {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;