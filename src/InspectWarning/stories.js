import React from "react";
import { select } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { InspectWarning } from "./InspectWarning";

export default {
  title: "InspectWarning",
  component: InspectWarning,
  decorators: [StoryWrapper],
};

const data = [
  {
    id: 1,
    status: "require",
    message: "NFT creator does not have Stripe Connect ID specified",
    explanation: "NFT creator does not have Stripe Connect ID specified",
  },
  {
    id: 2,
    status: "optional",
    message: "NFT does not have secret phrase / bonus text",
    explanation: "NFT does not have secret phrase / bonus text",
  },
  {
    id: 3,
    status: "passed",
    message: "NFT metadata file uploaded",
    explanation: "NFT metadata file uploaded",
  },
  {
    id: 4,
    status: "passed",
    message: "NFT on-chain && off-chain fees synchronized",
    explanation: "NFT on-chain && off-chain fees synchronized",
  },
  {
    id: 5,
    status: "passed",
    message: "NFT has 3 file checksume stored",
    explanation: "NFT has 3 file checksume stored",
  },
  {
    id: 6,
    status: "passed",
    message: "NFT has 200 owned copies",
    explanation: "NFT has 200 owned copies",
  },
  {
    id: 7,
    status: "passed",
    message: "NFT creator has 200 own copies on-chain",
    explanation: "NFT creator has 200 own copies on-chain",
  },
  {
    id: 8,
    status: "passed",
    message: "NFT has 1 active listings",
    explanation: "NFT has 1 active listings",
  },
];

export const main = () => {
  return (
    <>
      <InspectWarning data={data} />
    </>
  );
};
