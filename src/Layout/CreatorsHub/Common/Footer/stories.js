import React from "react";

// UI
import { H4, H5, Icon, Image } from "../../../..";
import { CreatorsHubFooter } from ".";
import { Flex } from "../../../../Flex";
import Logo from "../../../../assets/images/logo-symbol.svg";

export default {
  title: "Layout/CreatorsHub/Footer",
  parameters: {
    options: { showPanel: false },
  },
};

export const main = () => {
  const defaultProps = {
    bottomContent: (
      <>
        <H4 content="From Berlin with love by ©license.rocks" mb={6} />

        <H5 content="Backed by" mb={2} />

        <Flex container justify="space-between">
          <Flex item>
            <Image src={Logo} />
          </Flex>

          <Flex item>
            <Image src={Logo} />
          </Flex>
        </Flex>
      </>
    ),
    content: (
      <>
        <Image src={Logo} />
      </>
    ),
    navCols: [
      {
        title: "Company",
        items: [
          {
            key: "product",
            render: () => "Product",
          },
          {
            key: "service",
            render: () => "Service",
          },
          {
            key: "about",
            render: () => "About",
          },
        ],
      },
      {
        title: "Info",
        items: [
          {
            key: "partner",
            render: () => "Partner",
          },
          {
            key: "pressKit",
            render: () => "Press Kit",
          },
          {
            key: "contact",
            render: () => "Contact Us",
          },
        ],
      },
      {
        title: "Blockchain Links",
        items: [
          {
            key: "eth",
            render: () => "Ethereum",
          },
          {
            key: "tupelo",
            render: () => "Tupelo",
          },
          {
            key: "twitter",
            render: () => (
              <Icon color="secondary" icon="twitter" prefix="fab" size="lg" />
            ),
          },
        ],
      },
    ],
  };

  return <CreatorsHubFooter {...defaultProps} />;
};
