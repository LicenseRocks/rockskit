import React from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { select } from "@storybook/addon-knobs";
// Components
import { Guidelines } from "./Guidelines";
import { Modal } from "..";

export default {
  title: "Guidelines",
  component: Guidelines,
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

// data for footer

export const main = () => {
  return (
    <>
      <Guidelines
        animation={select("Animation", [true, false], true)}
        data={data}
      />
    </>
  );
};
