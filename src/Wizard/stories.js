import React, { useState } from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { Wizard } from ".";
import { Button } from "../Button";

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
      orientation="horizontal"
      backgroundStyle="primary"
      renderActionButtons={() => (
        <>
          <Button content="Draft" color="subtle" dInline mr={4} />
          <Button content="Schedule" color="subtle" dInline mr={4} />
        </>
      )}
      setCurrentStepIndex={setCurrentStep}
      steps={[
        {
          title: "Step 1",
        },
        {
          title: "Step 2",
        },
        {
          title: "Step 3",
        },
        {
          title: "Step 4",
        },
      ]}
    />
  );
};
