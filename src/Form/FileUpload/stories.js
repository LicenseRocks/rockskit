import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Button, FormError, FileUpload } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/FileUpload",
  component: FileUpload,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { control, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const defaultProps = {
    accept: "image/*, video/*",
    control,
    crop: boolean("Without Crop", false),
    disabled: boolean("Disabled", false),
    fileNameEditable: boolean("File Name Editable", true),
    hasError: !!errors.fileUpload,
    isRequired: "This item is required",
    maxSize: 1000000,
    multiple: boolean("Multiple", false),
    name: "fileUpload",
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileUpload {...defaultProps} />

      {errors.fileUpload && <FormError message={errors.fileUpload.message} />}

      <Button content="Submit" mt={8} type="submit" />
    </form>
  );
};
