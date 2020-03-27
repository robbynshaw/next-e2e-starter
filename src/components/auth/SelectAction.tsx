import React from "react";
import Grid from "@elements/Grid";
import Routes from "@src/routes";
import RestoreIcon from "@icons/RestoreIcon";
import AddIcon from "@icons/AddIcon";
import ActionCard from "@elements/ActionCard";
import { H1 } from "@elements/Headers";
import styled from "styled-components";

const AppName = styled.span`
  display: block;
  font-size: 48px;
  color: ${props => props.theme.colors.primary};
`;

interface ISelectActionProps {
  appName: string;
}

const SelectAction = (props: ISelectActionProps) => {
  const { appName } = props;

  return (
    <>
      <H1>
        <AppName>{appName}</AppName>
        First Time?
      </H1>
      <Grid>
        <ActionCard
          title="No, I already have a backup phrase"
          description="Import your existing account using a 12 word backup phrase"
          linkText="Import Account"
          linkHref={Routes.auth.service.select(false)}
          Icon={RestoreIcon}
        />
        <ActionCard
          title="Yes, let's get set up!"
          description="This will create a new account and backup phrase"
          linkText="Create an Account"
          linkHref={Routes.auth.service.select(true)}
          Icon={AddIcon}
        />
      </Grid>
    </>
  );
};

export default SelectAction;
