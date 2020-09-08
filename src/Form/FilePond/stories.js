import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Button, FormError, FilePond } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/FilePond",
  component: FilePond,
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
    hasError: !!errors.fileUpload,
    isRequired: "This item is required",
    name: "fileUpload",
    server: "https://run.mocky.io/v3/80d5e855-7a9c-4ad6-848a-fea855ca101c",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FilePond {...defaultProps} />

      {errors.fileUpload && <FormError message={errors.fileUpload.message} />}

      <Button content="Submit" mt={8} type="submit" />
    </form>
  );
};
