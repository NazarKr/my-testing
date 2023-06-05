import { HomeWraper, HomeDescr, HomeImg } from "./Home.styled";
import Logo from '../../assets/LogoGoIT.png'

const Home = () => {
  return (
    <HomeWraper>
      <HomeImg src={Logo} alt="img" />
      <HomeDescr>
        Test work with React.
      </HomeDescr>
    </HomeWraper>
  );
};

export default Home;
