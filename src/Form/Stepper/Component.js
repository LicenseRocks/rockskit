import React from "react";
import styled, { css } from "styled-components";

import { FieldWrapper } from "..";
import { StepperPropTypes, StepperDefaultProps } from "./props";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size }) =>
    size === "sm" &&
    css`
      flex-direction: column;
    `}

  user-select: none;

  input {
    border: none;
    width: 40px;
    outline: none;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
  }

  span {
    font-size: 12px;
    font-style: italic;
  }
`;

export const StepperComponent = ({
  label,
  value,
  onChange,
  min,
  max,
  size,
  ...props
}) => {
  const handleChange = (type) => {
    const newVal = type === "sub" ? value - 1 : value + 1;
    if (newVal < min || newVal > max) return;
    onChange(newVal);
  };

  return (
    <FieldWrapper
      endIcon="plus"
      endIconColor="secondary"
      endIconOnClick={() => handleChange("add")}
      startIcon="minus"
      startIconColor="secondary"
      startIconOnClick={() => handleChange("sub")}
      {...props}
    >
      <Wrapper size={size}>
        <input onChange={onChange} value={value} />
        <span>{label}</span>
      </Wrapper>
    </FieldWrapper>
  );
};

StepperComponent.propTypes = StepperPropTypes;

StepperComponent.defaultProps = StepperDefaultProps;
