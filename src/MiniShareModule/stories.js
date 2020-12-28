import React from "react";
import { select } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { MiniShareModule } from ".";

export default {
  title: "MiniShareModule",
  decorators: [StoryWrapper],
};

export const main = (props) => {
  const defaultProps = {
    orientation: select("Orientation", ["vertical", "horizontal"], "vertical"),
    url: "https://license.rocks/",
    ...props,
  };

  return <MiniShareModule {...defaultProps} />;
};
