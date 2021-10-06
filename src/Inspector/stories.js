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
    icon: "check-circle",
    iconColor: "success",
    collapsible: true,
    buttonContent: "resume",
    collapseContent: "NFT creator does not have Stripe Connect ID specified",
  },
  {
    id: 2,
    title: "NFT does not have secret phrase / bonus text",
    icon: "plus",
    iconColor: "secondary",
    collapsible: true,
    buttonContent: "resume",
    collapseContent: "NFT does not have secret phrase / bonus text",
  },
  {
    id: 3,
    title: "TNFT metadata file uploaded",
    icon: "copy",
    iconColor: "warning",
    collapsible: true,
    buttonContent: "resume",
    collapseContent: "NFT metadata file uploaded",
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
