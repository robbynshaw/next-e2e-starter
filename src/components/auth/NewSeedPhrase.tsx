import React from "react";
import Routes from "@src/routes";
import Router from "next/router";
import Button from "@components/elements/Button";
import LockIcon from "@components/icons/LockIcon";
import FormControlLabel from "@components/forms/FormControlLabel";
import Checkbox from "@components/forms/Checkbox";
import FormGroup from "@components/forms/FormGroup";

const exportAsFile = (a: string, b: string, c: string) => { };

export interface IOnboardingInitiator {
  location: string;
  tabId: string;
}

export interface INewSeedPhraseProps {
  seedPhrase: string;
  setSeedPhraseBackedUp: () => void;
  setCompleteOnboarding: () => void;
  onboardingInitiator: IOnboardingInitiator;
}

const NewSeedPhrase = (props: INewSeedPhraseProps) => {
  const {
    seedPhrase,
    setSeedPhraseBackedUp,
    setCompleteOnboarding,
    onboardingInitiator
  } = props;

  const [isShowingSeedPhrase, setIsShowingSeedPhrase] = React.useState(false);

  const handleExport = () => {
    exportAsFile("", seedPhrase, "text/plain");
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

    if (onboardingInitiator) {
      // await returnToOnboardingInitiator(onboardingInitiator);
    }
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
              this.context.metricsEvent({
                eventOpts: {
                  category: "Onboarding",
                  action: "Seed Phrase Setup",
                  name: "Revealed Words"
                }
              });
              this.setState({ isShowingSeedPhrase: true });
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

  const handleChange = (key: string) => { };

  const createCheckbox = (key: string, label: string) => (
    <FormControlLabel label={label}>
      <Checkbox
        checked={false}
        onChange={() => handleChange(key)}
        value={key}
      />
    </FormControlLabel>
  );

  return (
    <div className="reveal-seed-phrase">
      <div className="seed-phrase__sections">
        <div className="seed-phrase__main">
          <div className="first-time-flow__header">Secret Backup Phrase</div>
          <div className="first-time-flow__text-block">
            Your secret backup phrase makes it easy to backup and restore your
            account.
          </div>
          <div className="first-time-flow__text-block">
            WARNING: Never disclose your backup phrase. Anyone with this phrase
            will have full access to your account, including data which will
            allow them to impersonate you on this system forever.
          </div>
          {this.renderSecretWordsContainer()}
        </div>
        <div className="seed-phrase__side">
          <h2>Did You...?</h2>
          <FormGroup row>
            {createCheckbox(
              "storePhrase",
              "Store this phrase in your password manager"
            )}
            {createCheckbox(
              "writePhrase",
              "Write it on and then store some secret pieces of paper"
            )}
            {createCheckbox("memoPhrase", "Memorize this phrase (maybe?)")}
            {createCheckbox(
              "downPhrase",
              "Download this phrase and back it up somewhere safe and secure"
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
  );
};

export default NewSeedPhrase;
