import React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import styled from "styled-components";

import { StoryWrapper } from "../../.storybook/decorators";
import { Button, H3, OutlineButton, TextButton } from "..";

export default {
  title: "Button",
  decorators: [StoryWrapper],
};

const BaseComponent = ({ Component, title, ...props }) => {
  return (
    <Wrapper>
      <H3 color="textSecondary">{title}</H3>
      <Component {...props}>{title}</Component>
    </Wrapper>
  );
};

export const main = () => {
  const defaultProps = {
    color: select("Color", ["primary", "secondary", "subtle"], "primary"),
    disabled: boolean("Disabled", false),
    endIcon: text("End icon", "arrow-left"),
    size: select("Size", ["xs", "sm", "md"], "md"),
    startIcon: text("Start icon", "arrow-right"),
  };

  return (
    <>
      <BaseComponent Component={Button} title="Button" {...defaultProps} />

      <BaseComponent
        Component={OutlineButton}
        title="Outline Button"
        {...defaultProps}
      />

      <BaseComponent
        Component={TextButton}
        title="Text Button"
        {...defaultProps}
      />
    </>
  );
};

const Wrapper = styled.div`
  margin-bottom: 32px;
`;
