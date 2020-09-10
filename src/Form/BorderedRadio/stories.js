import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { BorderedRadio } from "./BorderedRadio";

export default {
  title: "Form/BorderedRadio",
  component: BorderedRadio,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "radio",
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "third", label: "Third" },
    ],
    register,
  };

  const values = watch();
  console.log("values: ", values);

  return <BorderedRadio {...defaultProps} />;
};
