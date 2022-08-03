import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Dropdown } from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [StoryWrapper],
};

export const main = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const defaultProps = {
    items: [{ label: "EN" }, { label: "DE" }],
    open: isOpen,
    responsive: boolean("Responsive", false),
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleOpen}>toggle</button>
      <Dropdown {...defaultProps}>
        <button onClick={handleOpen}>toggle</button>
      </Dropdown>
    </>
  );
};
