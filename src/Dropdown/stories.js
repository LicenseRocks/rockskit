import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Dropdown } from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    items: [{ label: "EN" }, { label: "DE" }],
    open: true,
    responsive: boolean("Responsive", false),
  };
  return <Dropdown {...defaultProps}>Test</Dropdown>;
};
