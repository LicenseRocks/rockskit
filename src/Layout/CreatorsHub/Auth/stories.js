import React from "react";

// UI
import { CreatorsHubAuthLayout } from ".";

export default {
  title: "Layout/CreatorsHub/Auth",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  const defaultProps = {
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
    },
  };

  return (
    <CreatorsHubAuthLayout {...defaultProps}>
      Layout content
    </CreatorsHubAuthLayout>
  );
};
