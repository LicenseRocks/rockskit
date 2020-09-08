import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Button, Icon, OutlineButton, Text } from "..";

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 24px 24px 24px 40px;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

export const WizardStepContent = ({
  children,
  content,
  currentStep,
  handleNext,
  handlePrev,
  isFirstStep,
  isLastStep,
  nextStepMethod,
  stepCount,
  submitButtonDisabled,
  submitButtonLoading,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <StyledContent {...props}>
      {children || content}
      <ActionWrapper>
        <div>
          <OutlineButton
            color="secondary"
            disabled={isFirstStep}
            icon="arrow-left"
            iconProps={{
              color: "secondary"
            }}
            noPadding
            onClick={handlePrev}
          />

          <Text color="textSecondary" dInline fontStyle="italic" ml={2}>
            {`${currentStep} of ${stepCount} steps`}
          </Text>
        </div>

        <Button
          content={isLastStep ? "Finish" : "Next"}
          disabled={submitButtonDisabled}
          loading={submitButtonLoading}
          onClick={nextStepMethod === "button" ? handleNext : undefined}
          type={nextStepMethod}
        />
      </ActionWrapper>
    </StyledContent>
  );
};

WizardStepContent.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  currentStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  nextStepMethod: PropTypes.string.isRequired,
  stepCount: PropTypes.number.isRequired,
};

WizardStepContent.defaultProps = {
  children: null,
  content: null,
};
