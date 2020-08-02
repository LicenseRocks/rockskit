import React from "react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { ToggleSwitch } from ".";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/ToggleSwitch",
  component: ToggleSwitch,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const { control, watch } = useForm();

  const defaultProps = {
    control,
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    size: select("Size", ["sm", "md", "lg"], "md"),
  };

  const values = watch();
  console.log("values: ", values);

  return <ToggleSwitch {...defaultProps} />;
};
