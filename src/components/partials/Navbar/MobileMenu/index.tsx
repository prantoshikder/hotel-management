/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Typography } from "antd";
import { Link } from "react-router-dom";
// import { Image } from "antd";

const { Title } = Typography;

const MobileMenu = () => {
  return (
    <div css={mobileMenuStyles} className="mobile-menu-wrapper">
      <div className="flex content-between items-center">
        <div className="header-logo">
          {/* <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={false}
          /> */}
          <Link to="/">
            <Title className="logo">HOTEL MANAGEMENT</Title>
          </Link>
        </div>
        <div>MobileMenu</div>
      </div>
    </div>
  );
};

const mobileMenuStyles = css`
  &.mobile-menu-wrapper {
    .header-logo {
      .logo {
        color: #f68d29;
        font-size: 22px;
        font-weight: 700;
        line-height: 24px;
        margin: 0;
      }
    }
  }
`;

export default MobileMenu;
