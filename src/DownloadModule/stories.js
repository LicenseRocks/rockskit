import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { DownloadModule } from ".";

export default {
  title: "DownloadModule",
  decorators: [StoryWrapper],
};

export const main = () => {
  return <DownloadModule />;
};
