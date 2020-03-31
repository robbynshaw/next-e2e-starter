import React from 'react';
import ActionCard from '@elements/ActionCard';
import Icon from '@icons/LockIcon';

export default {
  title: 'Elements/ActionCard',
  component: ActionCard,
};

export const Default = () => (
  <ActionCard title="Hello World" Icon={Icon} description="Hi" linkHref="/" linkText="A Link" />
);
