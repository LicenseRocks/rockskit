/**
 * RangeSlider
 */

import React from "react";
import { Controller } from "react-hook-form";

// Components
import { Slider } from "./Slider";
import { RangeSliderDefaultProps, RangeSliderPropTypes } from "./props";

export const RangeSlider = ({
  control,
  defaultValue,
  isRequired,
  name,
  ...props
}) => {
  return (
    <Controller
      as={<Slider defaultValue={defaultValue} {...props} />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      rules={{
        required: isRequired,
      }}
    />
  );
};

RangeSlider.propTypes = RangeSliderPropTypes;

RangeSlider.defaultProps = RangeSliderDefaultProps;
