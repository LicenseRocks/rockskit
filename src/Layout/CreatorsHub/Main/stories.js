import React from "react";

// UI
import { CreatorsHubMainLayout } from ".";
import { CartButton, OutlineButton } from "../../..";

export default {
  title: "Layout/CreatorsHub/Main",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  const defaultProps = {
    footer: "Footer content",
    headerProps: {
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
      primaryHasBorder: true,
      primaryWhite: true,
      secondary: true,
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
          <OutlineButton content="Button" mr={4} />
          <CartButton />
        </>
      ),
    },
    sidebar: "Sidebar content",
  };

  return (
    <CreatorsHubMainLayout {...defaultProps}>
      Layout content
    </CreatorsHubMainLayout>
  );
};
