import React from "react";
import styled, { css } from "styled-components";

import { FieldWrapper } from "../FieldWrapper";
import { FieldBasePropTypes, FieldBaseDefaultProps } from "./props";

const StyledInput = styled(({ component: Component, ...props }) => (
  <Component {...props} />
))`
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
    cursor: ${({ selectable }) => !selectable && "not-allowed"};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      ::placeholder {
        color: ${({ theme }) => theme.palette.error.main};
      }
      color: ${({ theme }) => theme.palette.error.main};
    `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ selectable }) =>
    selectable &&
    css`
      user-select: all;
    `}
`;

export const FieldBase = ({
  block,
  endIcon,
  endIconColor,
  endIconOnClick,
  hasError,
  register,
  startIcon,
  startIconColor,
  startIconOnClick,
  ...props
}) => {
  return (
    <FieldWrapper
      endIcon={endIcon}
      endIconColor={endIconColor}
      endIconOnClick={endIconOnClick}
      hasError={hasError}
      startIcon={startIcon}
      startIconColor={startIconColor}
      startIconOnClick={startIconOnClick}
    >
      <StyledInput hasError={hasError} ref={register} {...props} />
    </FieldWrapper>
  );
};

FieldBase.propTypes = FieldBasePropTypes;

FieldBase.defaultProps = FieldBaseDefaultProps;
