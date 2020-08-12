import React from "react";

import { StoryWrapper } from "../../../.storybook/decorators";
import { BoxBase } from "./Base";

export default {
  title: "Box/Base",
  component: BoxBase,
  decorators: [StoryWrapper],
};

export const main = () => {
  return <BoxBase>Children</BoxBase>;
};
