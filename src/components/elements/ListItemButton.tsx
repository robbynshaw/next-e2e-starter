import React, { ComponentType, FunctionComponent } from 'react';
import { ListItem, ListItemProps, ListItemIcon, ListItemText } from '@material-ui/core';

export interface ListItemButtonProps
  extends Omit<ListItemProps<'button', { component: 'button' }>, 'component'> {
  icon: ComponentType;
}

const ListItemButton: FunctionComponent<ListItemButtonProps> = (props: ListItemButtonProps) => {
  const { icon: Icon, children, button: isButton, ...rest } = props;
  const label = children as string;

  return (
    <ListItem button component="button" {...rest}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default ListItemButton;
