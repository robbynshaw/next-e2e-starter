import React from 'react';
import { XLLinkButton } from '@elements/LinkButton';

export default {
  title: 'Elements/XLLinkButton',
  component: XLLinkButton,
};

export const Default = () => (
  <XLLinkButton href="/" passHref title="Please click me">
    I'm just a humble XLLinkButton
  </XLLinkButton>
);
