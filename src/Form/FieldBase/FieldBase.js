import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { FieldWrapper } from "../FieldWrapper";
import { FieldBasePropTypes, FieldBaseDefaultProps } from "./props";

const StyledInput = styled(
  // eslint-disable-next-line react/prop-types
  forwardRef(({ component: Component, ...props }, ref) => (
    <Component ref={ref} {...props} />
  ))
)`
  flex: 1;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  line-height: 120%;
  padding: 8px;
  color: ${({ theme }) => theme.palette.text.primary};
  outline: none;
  border: none;
  height: 100%;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  background-color: transparent;

  ::placeholder {
    font-weight: normal;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ component }) =>
    component === "input" &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &:read-only {
        cursor: ${({ selectable }) => !selectable && "not-allowed"};
      }
    `}

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
  className,
  disableScrollOnNumber,
  endIcon,
  endIconColor,
  endIconOnClick,
  endIconPrefix,
  fixedHeight,
  hasError,
  hasWrapper,
  register,
  startIcon,
  startIconColor,
  startIconOnClick,
  startIconPrefix,
  ...props
}) => {
  const input = () => (
    <StyledInput
      block={block}
      className={hasWrapper ? "" : className}
      hasError={hasError}
      ref={register}
      onWheel={
        props.type === "number" && disableScrollOnNumber
          ? (event) => event.currentTarget.blur()
          : () => { }
      }
      {...props}
    />
  );
  if (!hasWrapper) return input();

  return (
    <FieldWrapper
      block={block}
      className={className}
      endIcon={endIcon}
      endIconColor={endIconColor}
      endIconOnClick={endIconOnClick}
      endIconPrefix={endIconPrefix}
      fixedHeight={fixedHeight}
      hasError={hasError}
      startIcon={startIcon}
      startIconColor={startIconColor}
      startIconOnClick={startIconOnClick}
      startIconPrefix={startIconPrefix}
    >
      {input()}
    </FieldWrapper>
  );
};

FieldBase.propTypes = FieldBasePropTypes;

FieldBase.defaultProps = FieldBaseDefaultProps;
