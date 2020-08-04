import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Button, FormError, FileUpload } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/FileUpload",
  component: FileUpload,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const defaultProps = {
    control,
    disabled: boolean("Disabled", false),
    hasError: !!errors.fileUpload,
    isRequired: "This item is required",
    name: "fileUpload",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileUpload {...defaultProps} />

      {errors.fileUpload && <FormError message={errors.fileUpload.message} />}

      <Button content="Submit" mt={8} type="submit" />
    </form>
  );
};
