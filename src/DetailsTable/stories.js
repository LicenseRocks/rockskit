import React from "react";
import styled from "styled-components";

import { StoryWrapper } from "../../.storybook/decorators";
import { DetailsTable, H3, Image, Paragraph } from "..";

const StyledImage = styled(Image).attrs(() => ({
  width: "100%",
}))`
  max-height: 150px;
`;

export default {
  title: "DetailsTable",
  decorators: [StoryWrapper],
};

export const main = (props) => {
  const defaultProps = {
    labelWidth: 220,
    rows: [
      {
        columnSm: true,
        renderLabel: () => (
          <StyledImage src="https://source.unsplash.com/random" />
        ),
        value: (
          <Paragraph
            fontWeight="light"
            mb={0}
            content="Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework."
          />
        ),
      },
      {
        label: "Amount",
        labelHint: true,
        labelHintIcon: "question",
        labelHintContent: "This is here to help you",
        value: <H3 content="12" />,
      },
      {
        label: "Price",
        value: <H3 content="200" color="primary" />,
        expandable: true,
      },
    ],
    ...props,
  };

  return <DetailsTable {...defaultProps} />;
};
