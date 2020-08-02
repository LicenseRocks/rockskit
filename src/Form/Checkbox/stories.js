import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Checkbox } from "./Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const { register } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "checkbox",
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "third", label: "Third" },
    ],
    register,
    stacked: boolean("Stacked", false),
  };

  return <Checkbox {...defaultProps} />;
};
