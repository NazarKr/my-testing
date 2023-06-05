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

            <HeaderTitle variant="h6" component="div">
              Twitcard
            </HeaderTitle>

              <LinkHeader to="/followers">Tweets</LinkHeader>

        </HeaderNav>
      </HeaderBox>
      <Suspense fallback={<div>Завантажуєм...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
