import React from "react";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { THEME_COLORS } from "../../theme";
import { ChipBadge } from ".";

export default {
  title: "Badge/ChipBadge",
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const defaultProps = {
    color: select("Color", THEME_COLORS, "secondary"),
    icon: "check-circle",
    label: text("Chip label", "Label"),
  };

  return <ChipBadge {...defaultProps} />;
};
