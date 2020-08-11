import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Select } from ".";

export default {
  title: "Form/Select",
  component: Select,
  decorators: [StoryWrapper],
};

export const main = (props = {}) => {
  const { register, watch } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "selectInput",
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "third", label: "Third" },
    ],
    register,
    ...props,
  };

  const values = watch();
  console.log("values: ", values);

  return <Select {...defaultProps} />;
};
