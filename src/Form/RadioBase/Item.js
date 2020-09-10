import React from "react";
import styled, { css } from "styled-components";

import Check from "../../assets/icons/check.svg";
import { RadioBasePropTypes, RadioBaseDefaultProps } from "./props";

const StyledInput = styled.input`
  display: none;

  + label {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    margin: 0 32px 0 0;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    ${({ stacked }) =>
      stacked &&
      css`
        display: flex;
        :not(:last-child) {
          margin: 0 0 24px 0;
        }
      `}

    &::before {
      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: ${({ type }) => (type === "radio" ? "50%" : "8px")};
      background-color: ${({ theme }) => theme.palette.common.white};
      border: 1px solid ${({ theme }) => theme.palette.gray.regular};
      margin-right: 8px;
      transition: background-color 0.1s ease-in-out;
      ${({ hasError }) =>
        hasError &&
        css`
          border-color: ${({ theme }) => theme.palette.error.main};
        `}
    }

    &:hover {
      &::before {
        background-color: ${({ theme }) => theme.palette.primary.main};
        border-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  &:checked + label::before {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    background-image: url("${`${Check}`}");
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:disabled + label {
    opacity: 0.3;

    &,
    span {
      cursor: default;
    }
  }

  ${({ bordered, theme }) =>
    bordered &&
    css`
      + label {
        margin: 0;
      }

      + label:first-of-type {
        margin: 0 0 0 -1px;
      }

      + label:last-of-type {
        margin: 0 -1px 0 0;
      }

      &:checked + label {
        border: 2px solid ${theme.palette.gray.dark};
        border-radius: 12px;
        height: 102%;
      }
    `}
`;

const StyledLabel = styled.label`
  ${({ bordered }) =>
    bordered &&
    css`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    `}
`;

export const RadioBaseItem = ({
  bordered,
  defaultValue,
  hasError,
  label,
  name,
  options,
  register,
  stacked,
  type,
  value,
  ...props
}) => {
  const id = `${name}-${value}`;
  const defaultChecked =
    type === "checkbox" ? defaultValue.includes(value) : defaultValue === value;

  return (
    <>
      <StyledInput
        bordered={bordered}
        defaultChecked={defaultChecked}
        hasError={hasError}
        id={id}
        name={name}
        ref={register}
        stacked={stacked}
        type={type}
        value={value}
        {...props}
      />
      <StyledLabel bordered={bordered} htmlFor={id}>
        {label}
      </StyledLabel>
    </>
  );
};

RadioBaseItem.propTypes = RadioBasePropTypes;

RadioBaseItem.defaultProps = RadioBaseDefaultProps;
