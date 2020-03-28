import React, { FunctionComponent } from 'react';
import NewSeedPhraseView from '@components/auth/NewSeedPhraseView';

const NewSeedPhrase: FunctionComponent = () => {
  const handleSeedPhraseBackedUp = (): void => {};

  const handleOnBoardingComplete = (): void => {};

  return (
    <NewSeedPhraseView
      seedPhrase=""
      setSeedPhraseBackedUp={handleSeedPhraseBackedUp}
      setCompleteOnboarding={handleOnBoardingComplete}
    />
  );
};

export default NewSeedPhrase;
