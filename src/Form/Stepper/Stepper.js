import React from "react";
import { Controller } from "react-hook-form";

import { StepperComponent } from "./Component";
import { StepperPropTypes, StepperDefaultProps } from "./props";

export const Stepper = ({
  control,
  defaultValue,
  isRequired,
  name,
  ...props
}) => {
  return (
    <Controller
      render={(events) => (
        <StepperComponent defaultValue={defaultValue} {...props} {...events} />
      )}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{ required: isRequired }}
    />
  );
};

Stepper.propTypes = StepperPropTypes;

Stepper.defaultProps = StepperDefaultProps;
