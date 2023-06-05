import styled from "styled-components";

export const LoadButton = styled.button`
margin: 0 auto;
  color: #373737;
  width: 196px;
  padding: 14px 0px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
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
`;
