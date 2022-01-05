import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  stepBorderAndTitleColor,
  stepFlagBackgroundColor,
  stepFlagColor,
} from "./helper";

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;

  ${({ isPassed }) =>
    isPassed &&
    css`
      cursor: pointer;
    `}

  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

const Flag = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => stepBorderAndTitleColor(props)};
  background-color: ${(props) => stepFlagBackgroundColor(props)};
  color: ${(props) => stepFlagColor(props)};
  border-radius: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  z-index: 1;
  transition: all ${({ transitionDuration }) => `${transitionDuration}ms`}
    ease-in-out;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: ${(props) => stepBorderAndTitleColor(props)};
  padding-left: 8px;
  transition: all ${({ transitionDuration }) => `${transitionDuration}ms`}
    ease-in-out;
  ${({ isHorizontal }) =>
    isHorizontal &&
    css`
      font-size: 12px;
      padding: 4px 4px 0 0;
    `}
`;

const RightTitle = styled.div`
  flex: 1;
  text-align: right;
`;

export const WizardStepTitle = ({
  disabled,
  isActive,
  isHorizontal,
  isPassed,
  label,
  flag,
  onClick,
  rightTitle,
  transitionDuration,
}) => {
  return (
    <StyledTitle
      disabled={disabled}
      onClick={onClick}
      isHorizontal={isHorizontal}
      isPassed={isPassed}
    >
      <Flag
        isActive={isActive}
        isPassed={isPassed}
        transitionDuration={transitionDuration}
      >
        {flag}
      </Flag>
      <Label
        isActive={isActive}
        isHorizontal={isHorizontal}
        isPassed={isPassed}
        transitionDuration={transitionDuration}
      >
        {label}
      </Label>

      {rightTitle && !isHorizontal && <RightTitle>{rightTitle}</RightTitle>}
    </StyledTitle>
  );
};

WizardStepTitle.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  isHorizontal: PropTypes.bool.isRequired,
  isPassed: PropTypes.bool.isRequired,
  label: PropTypes.node.isRequired,
  flag: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  transitionDuration: PropTypes.number.isRequired,
};

WizardStepTitle.defaultProps = {
  onClick: () => {},
};
