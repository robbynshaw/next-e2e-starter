import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import CenteredEmptyLayout from '@layouts/CenteredEmpty';
import { H1 } from '@elements/Headers';

const Import: NextPage = () => {
  const Content: FunctionComponent = () => <H1>Import</H1>;

  return <CenteredEmptyLayout main={Content} />;
};

export default Import;
