import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { DownloadModule } from ".";

export default {
  title: "DownloadModule",
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  return <DownloadModule />;
};
