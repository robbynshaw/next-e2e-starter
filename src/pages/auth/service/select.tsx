import { NextPage } from "next";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import CenteredEmptyLayout from "@layouts/CenteredEmpty";
import InitStepper from "@components/auth/InitStepper";
import { H1 } from "@elements/Headers";
import Card from "@elements/Card";
import NavList from "@elements/NavList";
import ListItemButton from "@elements/ListItemButton";
import DropboxIcon from "@icons/DropboxIcon";
import ComputerIcon from "@icons/ComputerIcon";
import CloudIcon from "@icons/CloudIcon";
import routes from "@src/routes";
import Link from "next/link";
import { getBool } from "@src/lib/routeHelpers";

const Select: NextPage = () => {
  const router = useRouter();
  const { isNew } = router.query;
  const isnew = getBool(isNew);

  const Content: FunctionComponent = () => (
    <>
      <InitStepper isNew={isnew} activeStep={0} />
      <H1>Where {isnew ? "would you like your" : "is your"} data backed up?</H1>
      <Card>
        <NavList aria-label="main service selections">
          <Link href={routes.auth.service.connect("dropbox", isnew)} passHref>
            <ListItemButton icon={DropboxIcon}>Dropbox</ListItemButton>
          </Link>
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
