import React from "react";
import { select } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { InspectWarning } from "./InspectWarning";

export default {
  title: "InspectWarning",
  component: InspectWarning,
  decorators: [StoryWrapper],
};

export const main = () => {
  return (
    <>
      <InspectWarning
        alert={select("Alert", ["require", "optional", "passed"], "info")}
        content="NFT creator does not have Stripe Connect ID specified"
      />
      <InspectWarning
        alert={select("Alert", ["require", "optional", "passed"], "info")}
        content="NFT creator does not have Stripe Connect ID specified"
      />
    </>
  );
};
