import React from "react";
import { boolean } from "@storybook/addon-knobs";

// UI
import { CreatorsHubHeader } from ".";
import { CartButton, OutlineButton } from "../../../..";

export default {
  title: "Layout/CreatorsHub/Header",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  const defaultProps = {
    primaryNavItems: [
      {
        key: "about",
        render: () => "About",
      },
      {
        key: "faq",
        render: () => "FAQ",
      },
      {
        key: "support",
        render: () => "Support",
      },
      {
        key: "language",
        render: () => "EN / DE",
        showSm: true,
      },
    ],
    primaryHasBorder: boolean("Primary Has Border", true),
    primaryWhite: boolean("Primary White", true),
    secondary: boolean("Secondary", true),
    secondaryNavItems: [
      {
        active: true,
        key: "dashboard",
        render: () => "Dashboard",
      },
      {
        key: "marketplace",
        render: () => "Marketplace",
      },
      {
        key: "myLicenses",
        render: () => "My Licenses",
      },
    ],
    secondaryRenderRight: () => (
      <>
        <OutlineButton content="Button" />
        <CartButton />
      </>
    ),
  };

  return <CreatorsHubHeader {...defaultProps} />;
};
