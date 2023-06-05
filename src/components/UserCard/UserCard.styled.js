import styled from "styled-components";
// import BGImg from "../../assets/defaultPicture.png";

export const CardWrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;
  background-color: #5736a3;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const LogoWraper = styled.div`
  position: relative;
  padding: 20px;
  box-shadow: 0 4.39px 4.39px 0 rgba(0, 0, 0, 0.06);
`;

export const LogoImg = styled.img`
position: absolute;
width: 76px;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Avatar = styled.img`
  position: absolute;
  bottom: -20%;
  left: 40%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid #EBD8FF;
  background-color: #5736a3;
  box-shadow: 0 4.39px 4.39px 0 rgba(0, 0, 0, 0.06);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 62px;
  padding-bottom: 36px;
  border-top: 8px solid #ebd8ff;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const InfoLabel = styled.span`
  margin-right: 8px;
`;