import React from "react";
import styled from "styled-components";
import { text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { ShareModule } from ".";

export default {
  title: "ShareModule",
  decorators: [StoryWrapper],
};

const StyledWrapper = styled.div`
  width: ${({ width }) => width};
`;

export const main = (props) => {
  const defaultProps = {
    buttonProps: {
      size: "md",
    },
    url: "https://license.rocks/",
    ...props,
  };

  return (
    <StyledWrapper width={text("Wrapper width", "auto")}>
      <ShareModule {...defaultProps} />
    </StyledWrapper>
  );
};
