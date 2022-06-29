import React from "react";
import { Controller } from "react-hook-form";

import { Toggle } from "./Toggle";
import { ToggleSwitchPropTypes, ToggleSwitchDefaultProps } from "./props";

export const TabsSwitch = ({
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

TabsSwitch.propTypes = ToggleSwitchPropTypes;

TabsSwitch.defaultProps = ToggleSwitchDefaultProps;
