import { HomeWraper, HomeDescr, HomeImg } from "./Home.styled";
import Logo from '../../assets/LogoGoIT.png'

const Home = () => {
  return (
    <HomeWraper>
      <HomeImg src={Logo} alt="img" />
      <HomeDescr>
        Test work with React is brought to your attention. For creating this
        work, I want to thank everyone who taught me - lecturers, mentors,
        administrators and all others, inspired and did not interfere with work
        - beloved wife and children. Sincerely, Vladimir Dyadenko.
      </HomeDescr>
    </HomeWraper>
  );
};

export default Home;
