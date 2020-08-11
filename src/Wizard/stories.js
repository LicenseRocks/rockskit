import React, { useState } from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { Wizard } from ".";

export default {
  title: "Wizard",
  component: Wizard,
  decorators: [StoryWrapper],
};

export const main = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Wizard
      currentStepContent={`Step ${currentStep + 1} content`}
      currentStepIndex={currentStep}
      nextStepMethod="button"
      setCurrentStepIndex={setCurrentStep}
      steps={["Step 1", "Step 2"]}
    />
  );
};
