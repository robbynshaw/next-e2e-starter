import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import CenteredEmptyLayout from '@layouts/CenteredEmpty';
import { H1 } from '@src/components/elements/Headers';
import NewSeedPhrase from '@components/auth/NewSeedPhrase';

const Generate: NextPage = () => {
  const Content: FunctionComponent = () => (
    <>
      <H1>Generate</H1>
      <NewSeedPhrase />
    </>
  );

  return <CenteredEmptyLayout main={Content} />;
};

export default Generate;
