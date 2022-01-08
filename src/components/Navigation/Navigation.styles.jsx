import styled from "styled-components";

export const Sidebar = styled.nav`
  margin: 0;
  padding: 0;
  width: 200px;
  background: #48a770;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;
  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
}
`;

export const SidebarCenter=styled.div`
  width: 100%;
`;

export const SidebarHeader = styled.div`
    padding: 16px;
    border-bottom: 1px solid #f3efe0;
    h3 {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      
      a {
        font-size: 1rem;
        color: #f3efe0;
      }
    }
    img {
    display: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
    @media only screen and (max-width:768px) {
      display: flex;
      justify-content: space-between;
      img {
        display: block;
            width: 25px;
    height: 25px;
      }
    }
`;


export const ListContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  @media screen and (min-width: 768px) {
    height: auto !important;
  }
`;
export const List = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    line-height: 1.8;
    a {
    display: block;
    padding: 16px;
    text-decoration: none;
    color: #f3efe0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
  }
  a.active {
    background: rgba(0,0,0,0.2);
    box-shadow: inset 0 -1px rgb(0 0 0 / 0%);
    color: #fff;
  }
  a:hover {
    background: rgba(0,0,0,0.2);
    box-shadow: inset 0 -1px rgb(0 0 0 / 0%);
    color: #fff;
  }
  @media screen and (max-width: 400px) {
   a {
    text-align: center;
  }
}
`;
