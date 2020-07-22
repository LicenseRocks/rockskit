import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { InputBase } from "../InputBase";

const StyledInput = styled.input`
  flex: 1;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  padding: 8px;
  color: ${({ theme }) => theme.palette.text.primary};
  outline: none;
  border: none;
  height: 100%;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;

  ::placeholder {
    font-weight: normal;
  }

  &:read-only {
    cursor: not-allowed;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      ::placeholder {
        color: ${({ theme }) => theme.palette.error.main};
      }
      color: ${({ theme }) => theme.colors.error.main};
    `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`;

export const Input = ({
  block,
  endIcon,
  disabled,
  hasError,
  register,
  startIcon,
  ...props
}) => {
  return (
    <InputBase
      disabled={disabled}
      endIcon={endIcon}
      hasError={hasError}
      startIcon={startIcon}
    >
      <StyledInput
        block={block}
        hasError={hasError}
        ref={register}
        {...props}
      />
    </InputBase>
  );
};

Input.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  endIcon: PropTypes.string,
  hasError: PropTypes.bool,
  register: PropTypes.func.isRequired,
  startIcon: PropTypes.string,
};

Input.defaultProps = {
  block: true,
  disabled: false,
  endIcon: "",
  hasError: false,
  startIcon: "",
};
