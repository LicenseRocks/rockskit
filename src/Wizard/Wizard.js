import React, { createRef, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import {
  WizardStepTitle,
  WizardStepContent,
  WizardPropTypes,
  WizardDefaultProps,
} from ".";
import { stepBorderAndTitleColor } from "./helper";
import { handleScroll } from "../utils";
import { DISPLAY, SPACER } from "../theme";

const Wrapper = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StepsWrapper = styled.div`
  ${({ headerFadeColor, isHorizontal, theme }) =>
    isHorizontal &&
    css`
      position: relative;
      ::before {
        content: "";
        display: inline-block;
        width: 64px;
        height: 100%;
        background: linear-gradient(
          90deg,
          ${headerFadeColor} 0%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }

      ::after {
        content: "";
        display: inline-block;
        width: 64px;
        height: 100%;
        background: linear-gradient(
          270deg,
          ${headerFadeColor} 0%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
      }

      ${theme.breakpoints.down("sm")} {
        ::before {
          width: 32px;
        }

        ::after {
          content: "";
          width: 32px;
        }
      }
    `}
`;

const Steps = styled.div`
  ${({ isHorizontal, theme }) =>
    isHorizontal &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: scroll;
      padding: 0 64px;
      user-select: none;
      -ms-overflow-style: none;
      &&::-webkit-scrollbar {
        display: none;
      }
      &.active {
        cursor: grabbing;
        cursor: -webkit-grabbing;
      }

      ${theme.breakpoints.down("sm")} {
        padding: 0 32px;
      }
    `}
`;

const StepConnector = styled.div`
  border-width: 0;
  border-style: dashed;
  border-color: ${(props) => stepBorderAndTitleColor(props)};
  border-left-width: 2px;
  transition: all ${({ transitionDuration }) => `${transitionDuration}ms`}
    ease-in-out;
  position: absolute;
  top: 0;
  left: 15px;
  bottom: 0;
  ::before {
    content: "";
    width: 2px;
    height: 100%;
    display: inline-block;
  }

  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      width: 100%;
      border-left-width: 0;
      border-top-width: 2px;
      top: 15px;
      left: 8px;
      ::before {
        content: "";
        width: 100%;
        height: 2px;
        display: inline-block;
      }
    `}
`;

const Step = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: 60px;

  :last-child {
    ${StepConnector} {
      ${({ isActive, isHorizontal }) =>
    (!isActive || isHorizontal) && "border: none"};
    }
  }

  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      width: 100px;
      min-width: 100px;
    `}
`;

export const Wizard = ({
  currentStepContent,
  currentStepIndex,
  headerFadeColor,
  nextStepMethod,
  orientation,
  renderActionButtons,
  setCurrentStepIndex,
  steps,
  submitButtonDisabled,
  submitButtonLoading,
  showNavigationButtons,
  transitionDuration,
  ...props
}) => {
  const stepRef = useRef(null);
  const wrapperRef = createRef();
  const isHorizontal = orientation === "horizontal";
  const stepCount = steps.length;
  const isLastStep = currentStepIndex === stepCount - 1;
  const isFirstStep = currentStepIndex === 0;

  useEffect(() => {
    if (isHorizontal) {
      handleScroll(wrapperRef.current);
    }
  }, []);

  useEffect(() => {
    if (isHorizontal && stepRef.current)
      stepRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [currentStepIndex]);

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleStepClick = (isPassed, stepIdx) => {
    if (isPassed) {
      setCurrentStepIndex(stepIdx);
    }
  };

  const content = (
    <WizardStepContent
      content={steps[currentStepIndex]?.content || currentStepContent}
      currentStep={currentStepIndex + 1}
      isHorizontal={isHorizontal}
      isLastStep={isLastStep}
      isFirstStep={isFirstStep}
      handleNext={handleNext}
      handlePrev={handlePrev}
      nextStepMethod={nextStepMethod}
      renderActionButtons={renderActionButtons}
      stepCount={stepCount}
      submitButtonDisabled={submitButtonDisabled}
      submitButtonLoading={submitButtonLoading}
      showNavigationButtons={showNavigationButtons}
      transitionDuration={transitionDuration}
    />
  );

  return (
    <Wrapper {...props}>
      <StepsWrapper
        headerFadeColor={headerFadeColor}
        isHorizontal={isHorizontal}
      >
        <Steps isHorizontal={isHorizontal} ref={wrapperRef}>
          {steps.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            const isPassed = idx < currentStepIndex;
            const stepKey = `step-${idx}`;

            return (
              <Step
                isActive={isActive}
                isHorizontal={isHorizontal}
                isPassed={isPassed}
                key={stepKey}
                ref={isActive ? stepRef : null}
              >
                <WizardStepTitle
                  disabled={step?.flagDisabled}
                  label={step.title}
                  flag={idx + 1}
                  isActive={isActive}
                  isHorizontal={isHorizontal}
                  isPassed={isPassed}
                  onClick={
                    step?.onClick || (() => handleStepClick(isPassed, idx))
                  }
                  rightTitle={step?.rightTitle}
                  transitionDuration={transitionDuration}
                />
                {!isHorizontal && isActive && content}
                <StepConnector
                  isActive={isActive}
                  isHorizontal={isHorizontal}
                  isPassed={isPassed}
                  transitionDuration={transitionDuration}
                />
              </Step>
            );
          })}
        </Steps>
      </StepsWrapper>
      {isHorizontal && content}
    </Wrapper>
  );
};

Wizard.propTypes = WizardPropTypes;

Wizard.defaultProps = WizardDefaultProps;
