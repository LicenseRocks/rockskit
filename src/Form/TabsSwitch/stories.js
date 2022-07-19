import React from "react";
import { number, text } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { TabsSwitch } from ".";
import { StoryWrapper } from "../../../.storybook/decorators";

export default {
  title: "Form/TabsSwitch",
  component: TabsSwitch,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { control, watch } = useForm();

  const defaultProps = {
    control,
    leftValue: text("Left Value", "Centralized"),
    leftValueWidth: number("Left Value width (px)", 87),
    leftValueSideMargin: number("Left Value margin (px)", 14),
    rightValue: text("Right Value", "Decentralized"),
    rightValueWidth: number("Right Value width (px)", 102),
    rightValueSideMargin: number("Right Value margin (px)", 6),
    totalWidth: number("Total width of switch (px)", 239),
  };

  const values = watch();
  console.log("values: ", values);

  return <TabsSwitch {...defaultProps} />;
};
