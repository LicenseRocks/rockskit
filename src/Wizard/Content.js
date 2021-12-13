import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button, OutlineButton, Text } from "..";

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;

  padding: ${({ isHorizontal, theme }) =>
    !isHorizontal ? theme.spacing(6, 6, 6, 10) : theme.spacing(0)};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ isHorizontal, theme }) =>
      theme.spacing(4, 4, 4, isHorizontal ? 4 : 8)};
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const WizardStepContent = ({
  children,
  content,
  currentStep,
  handleNext,
  handlePrev,
  isFirstStep,
  isLastStep,
  isHorizontal,
  nextStepMethod,
  renderActionButtons,
  stepCount,
  submitButtonDisabled,
  submitButtonLoading,
  showNavigationButtons,
  ...props
}) => {
  return (
    <StyledContent isHorizontal={isHorizontal} {...props}>
      {children || content}
      {showNavigationButtons && (
        <ActionWrapper>
          {isHorizontal && (
            <div>
              <OutlineButton
                color="secondary"
                disabled={isFirstStep}
                icon="arrow-left"
                iconProps={{
                  color: "secondary",
                }}
                noPadding
                onClick={handlePrev}
              />

              <Text color="textSecondary" dInline fontStyle="italic" ml={2}>
                {`${currentStep} of ${stepCount} steps`}
              </Text>
            </div>
          )}

          <div>
            {isLastStep && renderActionButtons()}

            <Button
              content={isLastStep ? "Finish" : "Next"}
              dInline
              disabled={submitButtonDisabled}
              loading={submitButtonLoading}
              onClick={nextStepMethod === "button" ? handleNext : undefined}
              type={nextStepMethod}
            />
          </div>
        </ActionWrapper>
      )}
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
  isHorizontal: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  nextStepMethod: PropTypes.string.isRequired,
  renderActionButtons: PropTypes.func,
  stepCount: PropTypes.number.isRequired,
  submitButtonDisabled: PropTypes.bool,
  submitButtonLoading: PropTypes.bool,
  showNavigationButtons: PropTypes.bool,
};

WizardStepContent.defaultProps = {
  children: null,
  content: null,
  renderActionButtons: () => {},
  submitButtonDisabled: false,
  submitButtonLoading: false,
  showNavigationButtons: true,
};
