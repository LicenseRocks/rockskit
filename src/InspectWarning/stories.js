import React from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { select } from "@storybook/addon-knobs";
// Inspect components
import { InspectFooter } from "./InspectFooter";
import { InspectBanner } from "./InspectBanner";
import { InspectWarning } from "./InspectWarning";

export default {
  title: "InspectWarning",
  component: InspectWarning,
  decorators: [StoryWrapper],
};

// Data from Figma Design
const data = [
  {
    id: 1,
    status: "Require",
    message: "NFT creator does not have Stripe Connect ID specified",
    explanation: "NFT creator does not have Stripe Connect ID specified",
  },
  {
    id: 2,
    status: "Optional",
    message: "NFT does not have secret phrase / bonus text",
    explanation: "NFT does not have secret phrase / bonus text",
  },
  {
    id: 3,
    status: "Passed",
    message: "NFT metadata file uploaded",
    explanation: "NFT metadata file uploaded",
  },
  {
    id: 4,
    status: "Passed",
    message: "NFT on-chain && off-chain fees synchronized",
    explanation: "NFT on-chain && off-chain fees synchronized",
  },
  {
    id: 5,
    status: "Passed",
    message: "NFT has 3 file checksume stored",
    explanation: "NFT has 3 file checksume stored",
  },
  {
    id: 6,
    status: "Passed",
    message: "NFT has 200 owned copies",
    explanation: "NFT has 200 owned copies",
  },
  {
    id: 7,
    status: "Passed",
    message: "NFT creator has 200 own copies on-chain",
    explanation: "NFT creator has 200 own copies on-chain",
  },
  {
    id: 8,
    status: "Passed",
    message: "NFT has 1 active listings",
    explanation: "NFT has 1 active listings",
  },
];

export const main = () => {
  return (
    <>
      <InspectBanner />
      <InspectWarning
        animation={select("Animation", [true, false], true)}
        data={data}
      />
      <InspectFooter />
    </>
  );
};

export const OnlyWarnings = () => {
  return (
    <>
      <InspectWarning
        animation={select("Animation", [true, false], true)}
        data={data}
      />
    </>
  );
};
