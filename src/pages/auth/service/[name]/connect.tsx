import React from "react";
import { NextPage } from "next";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import CenteredEmptyLayout from "@layouts/CenteredEmpty";
import InitStepper from "@components/auth/InitStepper";
import { H1 } from "@elements/Headers";
import { getBool, getString } from "@lib/routeHelpers";
import getService from "@src/lib/getService";
import routes from "@src/routes";
import { getDb } from "@src/storage/AppDB";

const ConnectService: NextPage = () => {
  const router = useRouter();
  const { name, isNew } = router.query;
  const isnew = getBool(isNew);
  const svcName = getString(name);

  const Content: FunctionComponent = () => (
    <>
      <InitStepper isNew={isnew} activeStep={0} />
      <H1>
        {name} : {isNew}
      </H1>
      <p>Connecting...</p>
    </>
  );

  React.useEffect(() => {
    const connect = async () => {
      const db = await getDb();
      const svc = getService(svcName);

      if (await svc.isConnected(db)) {
        if (isnew) {
          router.push(routes.auth.seed.prep);
        } else {
          router.push(routes.auth.seed.import);
        }
        return;
      }

      const redirUrl = svc.getRedirectUrl(isnew);
      window.location.replace(redirUrl);
    };
    connect();
  }, []);

  return <CenteredEmptyLayout main={Content} />;
};

export default ConnectService;
