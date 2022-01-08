import styled from "styled-components";

export const Content = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;
export const Btn = styled.button`
    background-color: var(--cl-green);
    border: none;
    color: var(--cl-wheat);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    :hover {
      box-shadow: 0 0 20px 5px var(--cl-green);
    }
`;