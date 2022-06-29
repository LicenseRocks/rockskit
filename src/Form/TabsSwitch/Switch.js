import React from "react";
import { bool, func, string } from "prop-types";
import styled, { css } from "styled-components";

const Switch = ({
  disabled,
  handleToggle,
  toggled,
  leftValue,
  leftValueWidth,
  leftValueSideMargin,
  rightValue,
  rightValueWidth,
  rightValueSideMargin,
  totalWidth,
  ...props
}) => {
  return (
    <StyledSwitchContainer
      disabled={disabled}
      onClick={handleToggle}
      toggled={toggled}
      leftValueWidth={leftValueWidth}
      rightValueWidth={rightValueWidth}
      leftValueSideMargin={leftValueSideMargin}
      rightValueSideMargin={rightValueSideMargin}
      totalWidth={totalWidth}
      {...props}
    >
      <div className="labels">
        <span>{leftValue}</span>
        <span>{rightValue}</span>
      </div>
      <StyledSwitch
        leftValueWidth={leftValueWidth}
        rightValueWidth={rightValueWidth}
        toggled={toggled}
      />
    </StyledSwitchContainer>
  );
};

const StyledSwitchContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.gray.white};
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.palette.gray.regular};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.2s;
  height: 40px;
  width: ${({ totalWidth }) => totalWidth && `${totalWidth}px`};

  .labels {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      font-weight: bold;
      transition: color 0.3s ease-out;
    }

    span:first-child {
      width: ${({ leftValueWidth }) =>
        leftValueWidth && `${leftValueWidth}px`};
      color: ${({ theme, toggled }) =>
        toggled ? theme.palette.gray.black : theme.palette.gray.white};
      margin-left: ${({ leftValueSideMargin }) => leftValueSideMargin && `${leftValueSideMargin}px`};
    }

    span:last-child {
      width: ${({ rightValueWidth }) =>
        rightValueWidth && `${rightValueWidth}px`};
      color: ${({ theme, toggled }) =>
        toggled ? theme.palette.gray.white : theme.palette.gray.black};
      margin-right: ${({ rightValueSideMargin }) => rightValueSideMargin && `${rightValueSideMargin}px`};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.error.main};
    `}
`;

const StyledSwitch = styled.span`
  background: ${({ theme }) => theme.palette.gray.black};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  left: 2px;
  position: absolute;
  top: 2px;
  transition: left 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 10px;
  color: ${({ theme }) => theme.palette.gray.medium};
  text-transform: uppercase;
  user-select: none;
  border-radius: 20px;
  height: 90%;
  width: ${({ toggled, leftValueWidth, rightValueWidth }) =>
    toggled ? `${rightValueWidth + 16}px` : `${leftValueWidth + 16}px`};

  ${({ theme, toggled }) =>
    toggled &&
    css`
      left: calc(100% - 2px);
      transform: translateX(-100%);
      color: ${theme.palette.primary.main};
    `};
`;

Switch.propTypes = {
  disabled: bool,
  handleToggle: func,
  leftValue: string.isRequired,
  leftValueWidth: string.isRequired,
  leftValueSideMargin: string.isRequired,
  rightValue: string.isRequired,
  rightValueWidth: string.isRequired,
  rightValueSideMargin: string.isRequired,
  totalWidth: string.isRequired,
  toggled: bool,
};

Switch.defaultProps = {
  disabled: false,
  handleToggle: null,
  toggled: false,
};

export default Switch;
