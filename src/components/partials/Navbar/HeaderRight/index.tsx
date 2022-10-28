/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, Space, Typography } from "antd";
import { FC } from "react";
import { AiOutlineSmile } from "react-icons/ai";

const { Title, Text } = Typography;

interface IHeaderRight {
  userAuth: boolean;
  setUserAuth: any;
  isMobile?: boolean;
}

const HeaderRight: FC<IHeaderRight> = ({ userAuth, setUserAuth, isMobile }) => {
  const handleLogin = () => {
    setUserAuth(true);
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };

  const handleProfile = () => {
    setUserAuth(false);
  };

  return (
    <div css={headerRightStyles} className="header-right-wrapper">
      {userAuth ? (
        <div onClick={handleProfile} className="user-account flex items-center">
          <AiOutlineSmile />

          {/* <Image src={avatarIcon} alt="Pranto Shikder" width={36} height={36} /> */}

          {!isMobile && (
            <div className="user-info flex items-start direction-column">
              <Title className="user-name" level={4}>
                Pranto Shikder
              </Title>
              <Text>User Account</Text>
            </div>
          )}
        </div>
      ) : (
        <Space size={20} className="btn-wrapper flex">
          <Button className="action-btn login-btn" onClick={handleLogin}>
            Login
          </Button>
          <Button className="action-btn signUp-btn" onClick={handleSignUp}>
            SignUp
          </Button>
        </Space>
      )}
    </div>
  );
};

const headerRightStyles = css`
  &.header-right-wrapper {
    .user-account {
      cursor: pointer;

      svg {
        color: #ffc145;
        font-size: 45px;
      }

      .user-info {
        margin-left: 0.8rem;
        .user-name {
          color: #ffc145;
          font-weight: 500;
          margin: 0;
        }
        .user-name + span {
          color: white;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    .btn-wrapper {
      .action-btn {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        padding: 8px 20px;
        border-radius: 20px;
        cursor: pointer;
      }

      .login-btn {
        color: #ffffff;
        background-color: transparent;
        border: 2px solid #fff;
      }
      .signUp-btn {
        color: #f68d29;
        background-color: transparent;
        border: 2px solid #f68d29;
      }
    }
  }
`;

export default HeaderRight;
