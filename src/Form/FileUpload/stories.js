import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { FileUpload } from ".";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/FileUpload",
  component: FileUpload,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const { control, watch } = useForm();
  const defaultProps = {
    control,
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "fileUpload",
  };

  const values = watch();
  console.log("values: ", values);

  return <FileUpload {...defaultProps} />;
};
