import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";
import { Icon } from "../../Icon";

const StyledInput = styled.input`
  display: none;

  + label {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 32px 0 0;
    padding: ${({ theme }) => theme.spacing(4)};
    border: 2px solid ${({ theme }) => theme.palette.gray.semiLight};
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &::before {
      content: "";
      display: inline-block;
      width: 24px;
      min-width: 24px;
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
  }

  &:checked + label::before {
    background-color: ${({ theme }) => theme.palette.gray.white};
    border-color: ${({ theme }) => theme.palette.primary.main};
    border-width: 7px;
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

  &:checked + label {
    border-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 12px;
  }
`;

const StyledLabel = styled.label`
  .title {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }

  .flex-center {
    display: flex;
    align-items: center;
    margin-left: ${({ theme }) => theme.spacing(4)};
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    margin-left: ${({ theme }) => theme.spacing(3)};
  }

  .text-light {
    font-weight: 400;
  }
`;

export const RadioEnhancedBaseItem = ({
  hasError,
  iconProps,
  name,
  register,
  options,
  price,
  icon,
  value,
  title,
  description,
  ...props
}) => {
  const id = `${name}-${value}`;

  return (
    <div className="radio-wrapper">
      <StyledInput
        hasError={hasError}
        id={id}
        name={name}
        ref={register}
        value={value}
        defaultValue={value}
        {...props}
      />
      <StyledLabel htmlFor={id}>
        <div className="flex-center">
          <Icon color="secondary" mr={2} {...iconProps} icon={icon} />
          <div className="flex-column">
            <span className="title">{title}</span>
            <span className="text-light">{description}</span>
            <span>{price}</span>
          </div>
        </div>
      </StyledLabel>
    </div>
  );
};

RadioEnhancedBaseItem.propTypes = {
  hasError: PropTypes.bool,
  icon: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES
};

RadioEnhancedBaseItem.defaultProps = {
  hasError: false,
  icon: "check-circle",
  name: "radioEnhanced",
  register: null,
  title: "Radio Enhanced",
  price: "Free",
  description: "Radio Enhanced Description"
};
