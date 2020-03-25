import { NextPage } from "next";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import CenteredEmptyLayout from "@layouts/CenteredEmpty";
import { H1 } from "@elements/Headers";
import Card from "@elements/Card";
import NavList from "@elements/NavList";
import ListItemButton from "@elements/ListItemButton";
import DropboxIcon from "@icons/DropboxIcon";
import ComputerIcon from "@icons/ComputerIcon";
import CloudIcon from "@icons/CloudIcon";

const Select: NextPage = () => {
  const router = useRouter();
  const { stage } = router.query;
  const isNew = stage === "new";

  const Content: FunctionComponent = () => (
    <>
      <H1>Where {isNew ? "would you like your" : "is your"} data backed up?</H1>
      <Card>
        <NavList aria-label="main service selections">
          <ListItemButton icon={DropboxIcon}>Dropbox</ListItemButton>
          {/* <ListItemButton icon={CloudIcon}>Google Drive</ListItemButton>
          <ListItemButton icon={CloudIcon}>Microsoft OneDrive</ListItemButton>
          <ListItemButton icon={CloudIcon}>IPFS</ListItemButton>
          <ListItemButton icon={CloudIcon}>DAT</ListItemButton>
          <ListItemButton icon={CloudIcon}>WebDav</ListItemButton>
          <ListItemButton icon={CloudIcon}>Local Server</ListItemButton> */}
          <ListItemButton icon={ComputerIcon}>
            Just in the browser (not recommended)
          </ListItemButton>
        </NavList>
      </Card>
    </>
  );

  return <CenteredEmptyLayout main={Content} />;
};

export default Select;
