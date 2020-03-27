import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import CenteredEmptyLayout from '@layouts/CenteredEmpty';
import InitStepper from '@components/auth/InitStepper';
import { H1 } from '@elements/Headers';
import { getBool, getString } from '@lib/routeHelpers';
import URI from 'urijs';
import getDb from '@src/storage/AppDB';
import getCloudStorage from '@src/lib/getCloudStorage';
import routes from '@src/routes';

const CompleteService: NextPage = () => {
  const [error, setError] = React.useState<string | undefined>();
  const router = useRouter();
  const { name, isNew } = router.query;
  const isnew = getBool(isNew);
  const svcName = getString(name);

  const Content: FunctionComponent = () => (
    <>
      <InitStepper isNew={isnew} activeStep={0} />
      <H1>
        {name} :{isNew}
      </H1>
      <p>{error || 'Completing connection...'}</p>
    </>
  );

  React.useEffect(() => {
    let resp = {
      token_type: undefined,
      uid: undefined,
      account_id: undefined,
      access_token: undefined,
    };

    if (window.location.hash && window.location.hash.length > 2) {
      resp = URI.parseQuery(`?${window.location.hash.substr(1)}`);
    }

    const loadUser = async (): Promise<void> => {
      const db = await getDb();
      const svc = getCloudStorage(svcName);

      if (!(await svc.isConnected(db))) {
        if (!resp.token_type || !resp.uid || !resp.account_id || !resp.access_token) {
          setError('Response from service was invalid');
          // todo let the user do something about this
        }

        const profile = await svc.getProfile(resp.access_token, {
          tokenType: resp.token_type,
          uid: resp.uid,
          accountId: resp.account_id,
        });

        await db.profiles.put(profile);
      }

      if (isnew) {
        router.push(routes.auth.seed.prep);
      } else {
        router.push(routes.auth.seed.import);
      }
    };

    loadUser();
  }, [isnew, router, svcName]);

  return <CenteredEmptyLayout main={Content} />;
};

export default CompleteService;
