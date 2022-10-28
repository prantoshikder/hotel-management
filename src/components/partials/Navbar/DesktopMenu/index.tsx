/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderRight from "../HeaderRight";
// import { Image } from "antd";

const { Title } = Typography;

const DesktopMenu = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <div css={desktopMenuStyles} className="desktop-menu-wrapper">
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

        <div className="menu-items">
          <Space size={20} className="flex items-center">
            <Link to="/">
              <Title className="menu-item" level={5}>
                Home
              </Title>
            </Link>
            <Link to="/">
              <Title className="menu-item" level={5}>
                About Us
              </Title>
            </Link>
            <Link to="/">
              <Title className="menu-item" level={5}>
                Services
              </Title>
            </Link>
            <Link to="/">
              <Title className="menu-item" level={5}>
                Blog
              </Title>
            </Link>
            <Link to="/">
              <Title className="menu-item" level={5}>
                Contact
              </Title>
            </Link>

            <HeaderRight userAuth={userAuth} setUserAuth={setUserAuth} />
          </Space>
        </div>
      </div>
    </div>
  );
};

const desktopMenuStyles = css`
  &.desktop-menu-wrapper {
    .header-logo {
      .logo {
        color: #f68d29;
        // color: #FFCC00;
        font-size: 22px;
        font-weight: 700;
        line-height: 24px;
        margin: 0;
      }
    }

    .menu-items {
      .menu-item {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        // font-family: "Montserrat", sans-serif;
      }
    }
  }
`;

export default DesktopMenu;
