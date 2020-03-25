import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

export interface IStepperProps {
  steps: string[];
  activeStep: number;
}

const CustomStepper = (props: IStepperProps) => {
  const { steps, activeStep } = props;

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
