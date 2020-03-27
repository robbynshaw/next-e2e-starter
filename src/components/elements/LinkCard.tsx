import React, { ReactNode, FunctionComponent } from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import Card from './Card';

export interface LinkCardProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const RawLinkCard: FunctionComponent<LinkCardProps> = (props: LinkCardProps) => {
  const { children, className, ...rest } = props;

  return (
    <Link {...rest}>
      <Card className={className}>{children}</Card>
    </Link>
  );
};

const LinkCard = styled(RawLinkCard)`
  cursor: pointer;
  transition: color 0.15s ease;

  & svg {
    transition: fill 0.15s ease;
  }

  &:hover,
  &:focus,
  &:active,
  &:hover svg,
  &:focus svg,
  &:active svg {
    color: ${props => props.theme.colors.primary};
    fill: ${props => props.theme.colors.primary};
  }
`;

export default LinkCard;
