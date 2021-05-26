import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Checkbox } from "./Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "checkbox",
    options: [
      {
        value: "first",
        labelHtml: 'First <a href="/terms" target="_blank">Terms of Usage</a>',
      },
      { value: "second", label: "Second" },
      { value: "third", labelHtml: "Third" },
    ],
    register,
    stacked: boolean("Stacked", false),
  };

  const values = watch();
  console.log("values: ", values);

  return <Checkbox {...defaultProps} />;
};
