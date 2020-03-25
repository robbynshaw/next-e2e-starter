import { List, ListProps } from "@material-ui/core";

export interface INavListProps extends ListProps {}

const NavList = (props: INavListProps) => {
  return <List component="nav" {...props} />;
};

export default NavList;
