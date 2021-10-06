import React, { useState } from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { Inspector } from "./Inspector";
import { Modal, Button, Text } from "..";
import { InspectorFooter } from "./Footer";

export default {
  title: "Inspector",
  component: Inspector,
  decorators: [StoryWrapper],
};

const ROWS = [
  {
    id: 1,
    title: "NFT creator does not have Stripe Connect ID specified",
    status: "require",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT creator does not have Stripe Connect ID specified",
  },
  {
    id: 2,
    title: "NFT does not have secret phrase / bonus text",
    status: "optional",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT does not have secret phrase / bonus text",
  },
  {
    id: 3,
    title: "NFT metadata file uploaded",
    status: "passed",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT metadata file uploaded",
  },
  {
    id: 4,
    title: "NFT on-chain && off-chain fees synchronized",
    status: "passed",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT metadata file uploaded",
  },
  {
    id: 5,
    title: "NFT has 3 file checksume stored",
    status: "passed",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT metadata file uploaded",
  },
  {
    id: 6,
    title: "NFT has 200 owned copies",
    status: "passed",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT has 200 owned copies",
  },
  {
    id: 7,
    title: "NFT creator has 200 own copies on-chain",
    status: "passed",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT creator has 200 own copies on-chain",
  },
  {
    id: 8,
    title: "NFT has 1 active listings",
    status: "passed",
    collapsible: true,
    buttonFunction: null,
    buttonContent: "resume",
    collapseContent: "NFT has 1 active listings",
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
      <Button content="Inspect" onClick={() => setOpen(true)} />
      <Modal {...defaultProps}>
        <Inspector px={5} my={5} rows={ROWS} />
        <InspectorFooter pl={5} py={4} footerData={footerData} />
      </Modal>
    </>
  );
};

export const main = () => <BaseComponent title={"Inspect NFT correctness"} />;
