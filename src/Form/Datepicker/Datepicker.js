import React from "react";
import { Controller } from "react-hook-form";

import { DatepickerComponent } from "./Component";
import { DatepickerPropTypes, DatepickerDefaultProps } from "./props";

export const Datepicker = ({
  control,
  defaultValue,
  isRequired,
  name,
  ...props
}) => {
  return (
    <Controller
      as={<DatepickerComponent {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{
        required: isRequired,
      }}
    />
  );
};

Datepicker.propTypes = DatepickerPropTypes;

Datepicker.defaultProps = DatepickerDefaultProps;
