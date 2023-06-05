import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.div`
  width: 100%;

`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
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
  padding:  8px;

  border: none;
  border-radius: 10px;
  box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.25);
    transition: scale 0.4s;
    scale: 1.001;
  }

  &.following {
    background-color: #5cd3a8;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 13px;
    padding:  10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding:  25px;
  }
  &.active {
    color: #00ff00;
  }
`;
export const HeaderTitle = styled.p`
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
