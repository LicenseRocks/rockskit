import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";
import { Icon } from "../../Icon";

const StyledInput = styled.input`
  display: none;

  &:focus + label {
    border: 2px solid ${({ theme }) => theme.palette.gray.regular};
  }

  + label {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0 32px 0 0;
    padding: ${({ theme }) => theme.spacing(8, 6)};
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
  }

  &:focus + label::before, &:checked + label::before {
    background-color: ${({ theme }) => theme.palette.gray.white};
    border-color: ${({ theme, hasError }) => !hasError && theme.palette.primary.main};
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
  ${({ hasError, theme }) => hasError && 
    css`
      border: 2px solid ${theme.palette.error.main} !important;
    `
  };
  
  .title {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }

  .flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .text-light {
    font-weight: 400;
  }
`;

export const RadioExtraBaseItem = ({
  hasError,
  iconProps,
  iconPrefix = "far",
  name,
  register,
  options,
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
      <StyledLabel hasError={hasError} htmlFor={id}>
        <div className="flex-center">
          <Icon color="secondary" mb={2} prefix={iconPrefix} {...iconProps} icon={icon} />
          <div className="flex-column">
            <span className="title">{title}</span>
            <span className="text-light">{description}</span>
          </div>
        </div>
      </StyledLabel>
    </div>
  );
};

RadioExtraBaseItem.propTypes = {
  hasError: PropTypes.bool,
  icon: PropTypes.string,
  iconPrefix: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES
};

RadioExtraBaseItem.defaultProps = {
  hasError: false,
  icon: "check-circle",
  iconPrefix: "far",
  name: "radioExtra",
  register: null,
  title: "Radio Extra",
  description: "Radio Extra Description"
};
