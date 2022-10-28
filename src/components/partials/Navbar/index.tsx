/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Container from "../../share/Conainer";
import useMediaQuery from "../../share/UseMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const isMobileView = useMediaQuery("(max-width: 800px)");

  return (
    <div css={navbarStyles} className="navbar-wrapper">
      <Container>{isMobileView ? <MobileMenu /> : <DesktopMenu />}</Container>
    </div>
  );
};

const navbarStyles = css`
  &.navbar-wrapper {
    padding: 12px 0;
    background-color: #02537d;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default Navbar;
