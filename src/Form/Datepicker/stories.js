import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Button, FormError, Datepicker } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/Datepicker",
  component: Datepicker,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const defaultProps = {
    control,
    disabled: boolean("Disabled", false),
    hasError: !!errors.datepicker,
    isRequired: "This item is required",
    name: "datepicker",
    selectRange: boolean("Select Range", false),
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Datepicker {...defaultProps} />

      {errors.datepicker && <FormError message={errors.datepicker.message} />}

      <Button content="Submit" mt={8} type="submit" />
    </form>
  );
};
