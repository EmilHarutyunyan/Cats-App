import styled from 'styled-components';

import nlo from "../../assets/img/spinner.png";

export const Spinner = styled.div`
  width: 50px;
  height: 80px;
  background-image: url(${({ image }) => image});
  background-size: 100%;
  background-repeat: no-repeat;
  animation: spin 0.8s linear infinite;
  margin: 30px auto;
  @keyframes spin {
    0% {
      transfor: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spin() {
   return (
      <Spinner image={nlo}/>
   )
}
export default Spin 