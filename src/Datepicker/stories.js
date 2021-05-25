import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { Datepicker } from "./Datepicker";
import { StoryWrapper } from "../../.storybook/decorators";

export default {
  title: "Datepicker",
  component: Datepicker,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    selectRange: boolean("Select Range", false),
  };

  return <Datepicker {...defaultProps} />;
};
