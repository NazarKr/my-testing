import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.div`
  width: 100%;

`;
export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #fff;
`;
export const HeaderButton = styled.button`
  margin-right: 10px;
  font-family: "Montserrat";
  font-size: 10px;
  width: 55px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 140px;
  }
`;
export const LinkHeader = styled(NavLink)`
  font-family: "Montserrat";
  text-decoration: none;
  color: black;
  font-size: 10px;
  font-weight: 500;
  padding: 0 8px;

  
  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
    padding: 0 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 0 25px;
  }
  &.active {
    color: #00ff00;
  }
`;
export const HeaderTitle = styled.p`
  /* flex-grow: 1; */
  color: #1d9bf0;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
