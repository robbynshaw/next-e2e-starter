import { NextPage } from "next";
import { FunctionComponent } from "react";
import CenteredEmptyLayout from "@layouts/CenteredEmpty";
import { H1 } from "@src/components/elements/Headers";
import { useRouter } from "next/router";

const Select: NextPage = () => {
  const router = useRouter();
  const { stage } = router.query;
  const isNew = stage === "new";

  const Content: FunctionComponent = () => (
    <H1>Where {isNew ? "would you like your" : "is your"} data stored?</H1>
  );

  return <CenteredEmptyLayout main={Content} />;
};

export default Select;
