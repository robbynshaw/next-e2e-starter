import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import Button from "@elements/Button";
import styled from "styled-components";

export interface ILinkButtonProps extends LinkProps {
  children: ReactNode;
  title: string;
  disabled?: boolean;
}

const LinkButton = (props: ILinkButtonProps) => {
  const { children, title, disabled, ...rest } = props;

  const handleClick = () => {
    if (disabled) {
      return false;
    }
  };

  return (
    <Link {...rest}>
      <a title={title} onClick={handleClick}>
        <Button disabled={disabled}>{children}</Button>
      </a>
    </Link>
  );
};

export const XLLinkButton = styled(LinkButton)`
  font-size: 80px;
  &&& button {
    font-size: 80px;
    padding: 25px 30px;
  }
`;

export default LinkButton;
