import React from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { GradientBase } from "./GradientBase";

export default {
  title: "GradientPicker",
  component: GradientBase,
  decorators: [StoryWrapper],
};

export const main = () => {
  return <GradientBase withModal />;
};
