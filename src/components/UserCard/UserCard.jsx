import {
  CardWrapper,
  Avatar,
  UserInfo,
  InfoItem,
  InfoLabel,
  LogoWraper,
  BackgroundImage,
  LogoImg,
} from "./UserCard.styled";
import bgImageMobile from '../../assets/defaultPicture.png'
import Logo from '../../assets/LogoGoIT.png'
import FollowButton from "../Button/FollowButton";


const formatNumber = num => {
  const myObj = {
    useGrouping: true,
  };
  return num.toLocaleString('En-en', myObj);
};

const UserCard = ({ id, tweets, followers, avatar }) => {
  return (
    <CardWrapper>
      <LogoWraper>
        <LogoImg src={Logo} alt="Logo" loading="lazy" />
        <BackgroundImage
          src={bgImageMobile}
          alt="image background"
          loading="lazy"
        />
        <Avatar src={avatar} alt="User Avatar" />
      </LogoWraper>
      <UserInfo>
        <InfoItem>
          <InfoLabel>
            <span>{tweets}</span> Tweets
          </InfoLabel>
        </InfoItem>
        <InfoItem>
          <InfoLabel>
            <span> {formatNumber(followers)}</span> Followers
          </InfoLabel>
        </InfoItem>
        <FollowButton id={id} />
      </UserInfo>
    </CardWrapper>
  );
};

export default UserCard;