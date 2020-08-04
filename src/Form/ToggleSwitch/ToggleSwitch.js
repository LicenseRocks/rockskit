import React from "react";
import { Controller } from "react-hook-form";

import { Toggle } from "./Toggle";
import { ToggleSwitchPropTypes, ToggleSwitchDefaultProps } from "./props";

export const ToggleSwitch = ({
  control,
  defaultValue,
  isRequired,
  name,
  ...props
}) => {
  return (
    <Controller
      render={(events) => (
        <Toggle defaultValue={defaultValue} {...props} {...events} />
      )}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{ required: isRequired }}
    />
  );
};

ToggleSwitch.propTypes = ToggleSwitchPropTypes;

ToggleSwitch.defaultProps = ToggleSwitchDefaultProps;
