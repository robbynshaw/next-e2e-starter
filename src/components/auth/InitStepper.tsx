import React from 'react';
import Stepper from '@components/stepper/Stepper';

const newSteps = [
  'Connect Cloud Storage',
  'Create Backup Phrase',
  'Create New Password',
  'Complete!',
];

const importSteps = ['Connect Cloud Storage', 'Import Account', 'Create New Password', 'Complete!'];

export interface IInitStepperProps {
  activeStep: number;
  isNew: boolean;
}

const InitStepper = (props: IInitStepperProps) => {
  const { activeStep, isNew } = props;
  return <Stepper steps={isNew ? newSteps : importSteps} activeStep={activeStep} />;
};

export default InitStepper;
