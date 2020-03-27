import React from 'react';
import { List, ListProps } from '@material-ui/core';

export type INavListProps = ListProps;

const NavList = (props: INavListProps) => {
  return <List component="nav" {...props} />;
};

export default NavList;
