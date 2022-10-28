/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "antd";
import { FC } from "react";

const { Title } = Typography;

interface HeadingTypes {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  className?: string;
}
const Heading: FC<HeadingTypes> = ({ title, level, className, ...rest }) => {
  return (
    <div css={headingStyles}>
      <Title level={level} className={`${className} title`} {...rest}>
        {title}
      </Title>
    </div>
  );
};

const headingStyles = css`
  .title {
  }
`;

export default Heading;
