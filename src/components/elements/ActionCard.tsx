import React, { ComponentType, FunctionComponent } from 'react';
import LinkCard from '@elements/LinkCard';
import styled from 'styled-components';

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: visibility 0.15s ease;

  svg {
    width: 70px;
    height: 70px;
  }

  & .hidden {
    visibility: hidden;
  }
`;

const LinkText = styled.h2`
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.border};

  &&& {
    margin: 20px 0 0 0;
    padding: 20px 0 0 0;
  }
`;

interface ActionCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  Icon: ComponentType;
}

const ActionCard: FunctionComponent<ActionCardProps> = (props: ActionCardProps) => {
  const { title, description, linkText, linkHref, Icon } = props;

  return (
    <LinkCard href={linkHref} passHref>
      <HeaderIcon>
        <Icon />
      </HeaderIcon>
      <h3>{title}</h3>
      <p>{description}</p>
      <LinkText>{linkText}</LinkText>
    </LinkCard>
  );
};

export default ActionCard;
