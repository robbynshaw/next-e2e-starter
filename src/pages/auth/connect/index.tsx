import { NextPage } from "next";
import { FunctionComponent } from "react";
import CenteredEmptyLayout from "@layouts/CenteredEmpty";
import { H1 } from "@src/components/elements/Headers";

const Connect: NextPage = () => {
  const Content: FunctionComponent = () => <H1>Where is your data stored?</H1>;

  return <CenteredEmptyLayout main={Content} />;
};

export default Connect;
