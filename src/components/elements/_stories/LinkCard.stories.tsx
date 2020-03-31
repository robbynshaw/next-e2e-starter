import React from 'react';
import LinkCard from '@elements/LinkCard';

export default {
  title: 'Elements/LinkCard',
  component: LinkCard,
};

export const Default = () => (
  <LinkCard href="/" passHref>
    I'm just a humble LinkCard
  </LinkCard>
);
