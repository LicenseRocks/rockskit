import React, { useState } from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { Inspector } from "./Inspector";
import { Modal, Button, Text } from "..";
import { InspectorFooter } from "./InspectorFooter";

export default {
  title: "Inspector",
  component: Inspector,
  decorators: [StoryWrapper],
};

const ROWS = [
  {
    id: 1,
    description: "Description",
    moreInfo: "2020-06-20",
    title: "Test",
    icon: "check-circle",
    iconColor: "success",
    collapsible: true,
    collapseContent: (
      <Text>NFT creator does not have Stripe Connect ID specified</Text>
    ),
  },
  {
    id: 2,
    description: "Some description",
    moreInfo: "2020-02-10",
    title: "Test 2",
    icon: "plus",
    iconColor: "secondary",
    collapsible: true,
    collapseContent: <Text>NFT does not have secret phrase / bonus text</Text>,
  },
  {
    id: 3,
    description: "",
    moreInfo: "2020-01-23",
    title: "Test 3",
    icon: "copy",
    iconColor: "warning",
    collapsible: true,
    collapseContent: <Text>NFT metadata file uploaded</Text>,
  },
];

export const main = () => <Inspector rows={ROWS} />;

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
        <Inspector px={5} my={5} rows={ROWS} />
        <InspectorFooter pl={2} py={5} footerData={footerData} />
      </Modal>
    </>
  );
};

export const InModal = () => (
  <BaseComponent title={"Inspect NFT correctness"} />
);
