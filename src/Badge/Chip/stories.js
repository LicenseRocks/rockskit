import React from "react";
import { select, text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { THEME_COLORS } from "../../theme";
import { ChipBadge } from ".";

export default {
  title: "Badge/ChipBadge",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    color: select("Color", THEME_COLORS, "black"),
    icon: text("Icon?", "check-circle"),
    label: text("Chip label", "Label"),
  };

  return <ChipBadge {...defaultProps} />;
};
