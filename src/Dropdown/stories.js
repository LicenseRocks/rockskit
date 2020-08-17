import React from "react";

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
  };
  return <Dropdown {...defaultProps} />;
};
