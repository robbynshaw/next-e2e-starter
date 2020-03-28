import React from 'react';
import Routes from '@src/routes';
import Router from 'next/router';
import Button from '@elements/Button';
import LockIcon from '@icons/LockIcon';
import Checkbox from '@elements/Checkbox';
import InitStepper from '@components/auth/InitStepper';

import { FormGroup, FormControlLabel } from '@material-ui/core';

const exportAsFile = (a: string, b: string, c: string) => {};

export interface NewSeedPhraseViewProps {
  seedPhrase: string;
  setSeedPhraseBackedUp: () => void;
  setCompleteOnboarding: () => void;
}

const NewSeedPhraseView = (props: NewSeedPhraseViewProps) => {
  const { seedPhrase, setSeedPhraseBackedUp, setCompleteOnboarding } = props;

  const [isShowingSeedPhrase, setIsShowingSeedPhrase] = React.useState(false);

  const handleExport = () => {
    exportAsFile('', seedPhrase, 'text/plain');
  };

  const handleNext = () => {
    if (!isShowingSeedPhrase) {
      return;
    }

    Router.push(Routes.auth.seed.confirm);
  };

  const handleSkip = async () => {
    // todo set to remind user later

    // await Promise.all([setCompletedOnboarding(), setSeedPhraseBackedUp(false)]);

    // if (onboardingInitiator) {
    // await returnToOnboardingInitiator(onboardingInitiator);
    // }
    Router.push(Routes.index);
  };

  const renderSecretWordsContainer = () => {
    return (
      <div className="reveal-seed-phrase__secret">
        <div>{seedPhrase}</div>
        {!isShowingSeedPhrase && (
          <div
            className="reveal-seed-phrase__secret-blocker"
            onClick={() => {
              setIsShowingSeedPhrase(true);
            }}
          >
            <LockIcon />
            <div className="reveal-seed-phrase__reveal-button">
              Click here to reveal secret words
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleChange = (key: string) => {};

  const createCheckbox = (key: string, label: string) => (
    <Checkbox value={key}>{label}</Checkbox>
    // <FormControlLabel label={label} control={() => (
    //   <Checkbox
    //     checked={false}
    //     onChange={() => handleChange(key)}
    //     value={key}
    //   />
    // )} />
  );

  return (
    <>
      <InitStepper isNew activeStep={1} />
      <div className="reveal-seed-phrase">
        <div className="seed-phrase__sections">
          <div className="seed-phrase__main">
            <div className="first-time-flow__header">Secret Backup Phrase</div>
            <div className="first-time-flow__text-block">
              Your secret backup phrase makes it easy to backup and restore your account.
            </div>
            <div className="first-time-flow__text-block">
              WARNING: Never disclose your backup phrase. Anyone with this phrase will have full
              access to your account, including data which will allow them to impersonate you on
              this system forever.
            </div>
            {renderSecretWordsContainer()}
          </div>
          <div className="seed-phrase__side">
            <h2>Did You...?</h2>
            <FormGroup row>
              {createCheckbox('storePhrase', 'Store this phrase in your password manager')}
              {createCheckbox(
                'writePhrase',
                'Write it on and then store some secret pieces of paper',
              )}
              {createCheckbox('memoPhrase', 'Memorize this phrase (maybe?)')}
              {createCheckbox(
                'downPhrase',
                'Download this phrase and back it up somewhere safe and secure',
              )}
            </FormGroup>
          </div>
        </div>
        <div className="reveal-seed-phrase__buttons">
          <Button onClick={handleSkip}>Remind Me Later</Button>
          <Button onClick={handleNext} disabled={!isShowingSeedPhrase}>
            Next
          </Button>
        </div>
        {/* {onboardingInitiator ? (
        <Snackbar
          open={false} // todo
          message="'Remind Me later' will close this tab and direct back to ..."
        />
      ) : null} */}
      </div>
    </>
  );
};

export default NewSeedPhraseView;
