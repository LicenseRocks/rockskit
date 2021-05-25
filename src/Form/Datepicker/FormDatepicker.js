import React from "react";
import { Controller } from "react-hook-form";

import { FormDatepickerComponent } from "./Component";
import { FormDatepickerPropTypes, FormDatepickerDefaultProps } from "./props";

export const FormDatepicker = ({
  control,
  defaultValue,
  isRequired,
  name,
  ...props
}) => {
  return (
    <Controller
      as={<FormDatepickerComponent {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{
        required: isRequired,
      }}
    />
  );
};

FormDatepicker.propTypes = FormDatepickerPropTypes;

FormDatepicker.defaultProps = FormDatepickerDefaultProps;
