import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Input } from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    endIcon: "box",
    hasError: boolean("Has error", false),
    name: "textInput",
    placeholder: text("Placeholder", "Placeholder"),
    readOnly: boolean("Read only", false),
    register,
    startIcon: "user",
    language: "DE",
  };

  const values = watch();
  console.log("values: ", values);

  return <Input {...defaultProps} />;
};
