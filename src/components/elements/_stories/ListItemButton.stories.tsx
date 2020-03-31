import React from 'react';
import ListItemButton from '@elements/ListItemButton';
import ComputerIcon from '@icons/ComputerIcon';

export default {
  title: 'Elements/ListItemButton',
  component: ListItemButton,
};

export const Default = () => (
  <ListItemButton icon={ComputerIcon}>I'm just a humble ListItemButton</ListItemButton>
);
