import React from "react";
import styled from "styled-components";
import { boolean, select, text } from "@storybook/addon-knobs";

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

export const main = () => {
  const defaultProps = {
    errors: [],
    labelAlign: select("Label align", ["center", "start"], "center"),
  };

  return (
    <StyledWrapper width={text("Wrapper width", "100%")}>
      <FormRow bottomHintText="street" hint="Just type one of that" label="Label with Hint" {...defaultProps}>
        <Input hasError={boolean("1st input hasError", false)} name="input1" placeholder="Input 1" />
      </FormRow>
      <FormRow hint="Just type one of that" label="Label" {...defaultProps}>
        <Input hasError={boolean("2nd input hasError", false)} name="input1" placeholder="Input 1" />
        <Input name="input2" placeholder="Input 2" />
      </FormRow>

      <FormRow label="Label" {...defaultProps}>
        <RadioStory />
      </FormRow>
    </StyledWrapper>
  );
};
