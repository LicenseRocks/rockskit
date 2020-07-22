import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Icon } from "../..";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.gray.regular};
  padding: 0 16px;
  color: ${({ theme }) => theme.palette.text.primary};
  outline: none;
  height: 40px;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;

  :not(:last-child) {
    margin-right: 16px;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  &:read-only {
    border: 1px solid ${({ theme }) => theme.palette.gray.regular};
    cursor: not-allowed;
  }

  svg {
    color: ${({ theme }) => theme.palette.gray.regular};
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

  ${({ block }) =>
    block &&
    css`
      flex: 1;
    `}
`;

export const InputBase = ({ children, endIcon, startIcon, ...props }) => {
  return (
    <StyledWrapper {...props}>
      {startIcon && <Icon icon={startIcon} />}
      {children}
      {endIcon && <Icon icon={endIcon} />}
    </StyledWrapper>
  );
};

InputBase.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  endIcon: PropTypes.string,
  startIcon: PropTypes.string,
};

InputBase.defaultProps = {
  block: true,
  endIcon: "",
  startIcon: "",
};
