import React, { useState } from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { select } from "@storybook/addon-knobs";
// Components
import { Guidelines } from "./Guidelines";
import { Modal, Button, Collapse } from "..";
import { GuidelinesFooter } from "./GuidelinesFooter";

export default {
  title: "Guidelines",
  component: Guidelines,
  decorators: [StoryWrapper],
};

// Data from Figma Design
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

// data for footer
const footerData = [
  {
    id: 1,
    status: "require",
    content:
      "Explain about require alert for example Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    status: "optional",
    content:
      "Explain about require alert for example Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    status: "passed",
    content:
      "Explain about require alert for example Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const BaseComponent = (props) => {
  const [open, setOpen] = useState(false);
  const defaultProps = {
    open,
    onClose: () => setOpen(false),
    fullWidth: true,
    ...props,
  };

  return (
    <>
      <Button content="Open Modal" onClick={() => setOpen(true)} />
      <Modal {...defaultProps}>
        <Guidelines
          animation={select("Animation", [true, false], true)}
          data={data}
          buttonText={"Resume"}
        />
        <GuidelinesFooter footerData={footerData} />
      </Modal>
    </>
  );
};

export const main = () => <BaseComponent title={"Inspect NFT correctness"} />;

// export const collapse = () => {
//   <Collapse isOpened={true}>hej</Collapse>;
// };
