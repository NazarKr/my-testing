import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  HeaderBox,
  HeaderNav,
  HeaderTitle,
  LinkHeader,
} from "./layout.styled";

const Layout = () => {
  return (
    <>
      <HeaderBox>
        <HeaderNav>
              <LinkHeader to="/"> Home</LinkHeader>
            <HeaderTitle>
              Tweetcards
            </HeaderTitle>
              <LinkHeader to="/users">Tweets</LinkHeader>
        </HeaderNav>
      </HeaderBox>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
