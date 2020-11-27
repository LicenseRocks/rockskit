import React from "react";
import styled from "styled-components";
import { text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { CollectionItem } from ".";

const StyledWrapper = styled.div`
  width: ${({ width }) => width};
`;

export default {
  title: "CollectionItem",
  component: CollectionItem,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    largeImageUrl: "https://source.unsplash.com/random",
    name: "The Collection",
    details: [
      {
        label: "Amount",
        value: 10,
      },
      {
        label: "Created at",
        value: "2020-10-10",
      },
    ],
    smallImagesUrls: ["https://source.unsplash.com/random"],
  };

  return (
    <StyledWrapper width={text("Wrapper width", "350px")}>
      <CollectionItem {...defaultProps} />
    </StyledWrapper>
  );
};
