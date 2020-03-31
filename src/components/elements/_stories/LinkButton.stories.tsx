import React from 'react';
import LinkButton from '@elements/LinkButton';

export default {
  title: 'Elements/LinkButton',
  component: LinkButton,
};

export const Default = () => (
  <LinkButton href="/" passHref title="Please click me">
    I'm just a humble LinkButton
  </LinkButton>
);
