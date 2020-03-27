import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import CenteredEmptyLayout from '@layouts/CenteredEmpty';
import { H1 } from '@src/components/elements/Headers';

const Generate: NextPage = () => {
  const Content: FunctionComponent = () => <H1>Generate</H1>;

  return <CenteredEmptyLayout main={Content} />;
};

export default Generate;
