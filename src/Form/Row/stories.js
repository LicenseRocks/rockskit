import React from "react";
import styled from "styled-components";
import { text } from "@storybook/addon-knobs";

import { FormRow, Input } from "../..";
import { StoryWrapper } from "../../../.storybook/decorators";
import { main as RadioStory } from "../Radio/stories";

export default {
  title: "Form/Row",
  component: FormRow,
  decorators: [StoryWrapper],
};

const StyledWrapper = styled.div`
  width: ${({ width }) => width};
`;

export const main = (props = {}) => {
  const defaultProps = {
    errors: [],
  };

  return (
    <StyledWrapper width={text("Wrapper width", "50%")}>
      <FormRow {...defaultProps}>
        <Input name="input1" placeholder="Input 1" />
        <Input name="input2" placeholder="Input 2" />
      </FormRow>

      <FormRow {...defaultProps}>
        <Input name="input1" placeholder="Input 1" />
        <RadioStory />
      </FormRow>
    </StyledWrapper>
  );
};
