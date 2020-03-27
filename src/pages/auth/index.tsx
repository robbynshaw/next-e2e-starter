import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import CenteredEmptyLayout from '@layouts/CenteredEmpty';
import SelectAction from '@components/auth/SelectAction';
import config from '@src/config';

const Auth: NextPage = () => {
  const Content: FunctionComponent = () => <SelectAction appName={config.appName} />;

  return <CenteredEmptyLayout main={Content} />;
};

export default Auth;
