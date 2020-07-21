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
