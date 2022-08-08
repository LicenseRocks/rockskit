import React from "react";
import { boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Dropdown } from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [StoryWrapper],
};

const sharedDefaultProps = () => ({
  responsive: boolean("Responsive", false),
  disableOutsideClickClose: boolean(
    "Disable close on outside content click",
    false
  ),
});

export const customContentRender = () => {
  const defaultProps = {
    ...sharedDefaultProps(),
    render: ({ close, isMobile }) => (
      <div>
        <p>Test render custom content</p>
        <button type="button" onClick={close}>
          Close
        </button>
        <p>{`Is mobile? ${isMobile}`}</p>
      </div>
    ),
  };

  return (
    <>
      <Dropdown {...defaultProps}>
        <button type="button">toggle</button>
      </Dropdown>
    </>
  );
};

export const itemsRender = () => {
  const defaultProps = {
    items: [
      { label: "EN", value: "en", onClick: () => console.log("en") },
      { label: "DE", value: "de", onClick: () => console.log("de") },
    ],
    ...sharedDefaultProps(),
  };

  return (
    <>
      <Dropdown {...defaultProps}>
        <button type="button">Toggle</button>
      </Dropdown>
    </>
  );
};
