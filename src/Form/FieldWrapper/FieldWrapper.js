import React from "react";
import styled, { css } from "styled-components";

import { Icon } from "../../Icon";
import { FieldWrapperDefaultProps, FieldWrapperPropTypes } from "./props";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.spacing(3)}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.gray.regular};
  padding: 0 ${({ theme }) => theme.spacing(4)}px;
  outline: none;
  height: 40px;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;

  :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)}px;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

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

export const FieldWrapper = ({
  children,
  endIcon,
  endIconColor,
  endIconOnClick,
  startIcon,
  startIconColor,
  startIconOnClick,
  ...props
}) => {
  return (
    <StyledWrapper {...props}>
      {startIcon && (
        <Icon
          color={startIconColor}
          icon={startIcon}
          onClick={startIconOnClick}
        />
      )}

      {children}

      {endIcon && (
        <Icon color={endIconColor} icon={endIcon} onClick={endIconOnClick} />
      )}
    </StyledWrapper>
  );
};

FieldWrapper.propTypes = FieldWrapperPropTypes;

FieldWrapper.defaultProps = FieldWrapperDefaultProps;
