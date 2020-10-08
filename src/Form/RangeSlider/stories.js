/**
 * React Select
 */

import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Button, FormError, RangeSlider } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/RangeSlider",
  component: RangeSlider,
  decorators: [StoryWrapper],
};

export const main = (props = {}) => {
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const defaultProps = {
    control,
    defaultValue: [20, 60],
    errors,
    hasError: boolean("Has error", false),
    name: "range",
    renderValueText: (val) => `${val}$`,
    isRequired: "This item is required",
    ...props,
  };

  console.log("re-render");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RangeSlider {...defaultProps} />

      {errors.range && <FormError message={errors.range.message} />}

      <Button content="Submit" mt={8} type="submit" />
    </form>
  );
};
