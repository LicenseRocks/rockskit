import React from "react";
import { text, withKnobs, boolean, select } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { Stepper } from ".";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/Stepper",
  component: Stepper,
  decorators: [StoryWrapper, withKnobs],
};

export const main = (props = {}) => {
  const { control, watch } = useForm();

  const defaultProps = {
    control,
    disabled: boolean("Disabled", false),
    hasError: boolean("Has Error", false),
    label: text("Label", "Days"),
    name: "stepper",
    size: select(
      "Size",
      {
        Normal: "normal",
        Small: "sm",
      },
      "normal"
    ),
    ...props,
  };

  const values = watch();
  console.log("values: ", values);

  return <Stepper {...defaultProps} />;
};
