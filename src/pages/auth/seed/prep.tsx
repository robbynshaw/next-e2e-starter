import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import CenteredEmptyLayout from '@layouts/CenteredEmpty';
import PrepareForNewSeed from '@components/auth/PrepareForNewSeed';

const Prep: NextPage = () => {
  const Content: FunctionComponent = () => <PrepareForNewSeed />;

  return <CenteredEmptyLayout main={Content} />;
};

export default Prep;
