import { addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import { Container } from "./decorators";

addParameters({
  options: {
    panelPosition: "right",
  },
});

addDecorator(Container);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addParameters({
  viewport: {
    viewports: [
      {
        name: "Desktop",
        styles: {
          width: "100%",
          height: "100%",
        },
        type: "desktop",
      },
      {
        name: "iPad",
        styles: {
          width: "768px",
          height: "1024px",
        },
        type: "tablet",
      },
      {
        name: "iPhone X",
        styles: {
          width: "375px",
          height: "812px",
        },
        type: "mobile",
      },
      {
        name: "iPhone 6/7/8 Plus",
        styles: {
          width: "414px",
          height: "736px",
        },
        type: "mobile",
      },
      {
        name: "iPhone 5/SE",
        styles: {
          width: "320px",
          height: "568px",
        },
        type: "mobile",
      },
    ],
    defaultViewport: "Desktop",
  },
});
