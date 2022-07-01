import React from "react";
import { Controller } from "react-hook-form";

import { TabsToggle } from "./TabsToggle";
import { TabsSwitchPropTypes, TabsSwitchDefaultProps } from "./props";

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
        <TabsToggle defaultValue={defaultValue} {...props} {...events} />
      )}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{ required: isRequired }}
    />
  );
};

TabsSwitch.propTypes = TabsSwitchPropTypes;

TabsSwitch.defaultProps = TabsSwitchDefaultProps;
