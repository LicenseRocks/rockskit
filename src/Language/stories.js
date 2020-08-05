import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { Language } from ".";

export default {
  title: "Language",
  component: Language,
  decorators: [StoryWrapper],
};

export const main = () => <Language onChange={() => {}} value="en" />;
