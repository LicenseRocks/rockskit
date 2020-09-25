import React from "react";

import { StoryWrapper } from "../../../.storybook/decorators";
import { useAppContext } from "..";

export default {
  title: "AppContext",
  decorators: [StoryWrapper],
};

export const main = () => {
  const appContext = useAppContext();
  console.log("appContext: ", appContext);

  return <pre>{JSON.stringify(appContext) || "Nothing in app context"}</pre>;
};
