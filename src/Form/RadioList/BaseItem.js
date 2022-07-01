import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";
import { Icon } from "../../Icon";
import { TinyBadge } from "../../Badge";
import { H4, Text } from "../../Typography";

const StyledInput = styled.input`
  display: none;

  &:focus + label {
    border: 2px solid ${({ theme }) => theme.palette.gray.regular};
  }

  + label {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 32px 0 0;
    padding-inline: ${({ theme }) => theme.spacing(8)};
    padding-block: ${({ theme }) => theme.spacing(5)};
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

  &:disabled + label {
    opacity: 0.3;

    &,
    span {
      cursor: default;
    }
  }

  &:checked + label {
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
  }
  

`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  .icon_wrapper {
    margin-right: ${({ theme }) => theme.spacing(3)};
  }
  
  .text_wrapper {
    .title {
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
    .description .badge {
      display: inline;
      margin-left: ${({ theme }) => theme.spacing(2)};
    }
  }
`;

const StyledIcon = styled(Icon)`
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  border-radius: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.palette.gray.medium};
  border: 2px solid transparent;
  border-color: ${({ active, theme }) => active && theme.palette.success.main}
`;

export const RadioListBaseItem = ({
  name,
  value,
  title,
  info,
  icon,
  active,
  activeLabel,
  hasError,
  iconProps,
  register,
  ...props
}) => {
  const id = `${name}-${value}`;
  
  console.log("🎉 activeLabel: ", activeLabel)

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
        <div className="icon_wrapper">
          <StyledIcon icon={icon} size="lg" color="gray" active={active} />
        </div>
        <div className="text_wrapper">
          <H4 className="title">
            {title}
          </H4>
          <Text className="description">
            {info}
            {active && <div className="badge"><TinyBadge color="success" label={activeLabel} /></div>}
          </Text>

        </div>
      </StyledLabel>
    </div>
  );
};

RadioListBaseItem.propTypes = {
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

RadioListBaseItem.defaultProps = {
  hasError: false,
  icon: "check-circle",
  name: "radioEnhanced",
  register: null,
  title: "Radio Enhanced",
  price: "Free",
  description: "Radio Enhanced Description"
};
