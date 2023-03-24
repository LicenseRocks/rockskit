import React, { forwardRef, useEffect, useRef } from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import styled from "styled-components";

import { StoryWrapper } from "../../.storybook/decorators";
import { Button, H3, OutlineButton, TextButton, ButtonBase, DeleteButton } from "..";
import MuiButtonBase from "@material-ui/core/ButtonBase";

export default {
  title: "Button",
  decorators: [StoryWrapper],
};

const Container = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column ? "column" : "row" };
  gap: ${({ column }) => column ? "unset" : "2rem" };
`;

const FullWidthWrapper = styled.div`
  width: 300px;
  border: 1px solid purple;
  border-radius: 16px;
`;

const BaseComponent = forwardRef(({ Component, title, ...props }, ref) => {
  return (
    <Wrapper>
      <H3 color="textSecondary">{title}</H3>
      <Component ref={ref} {...props}>
        {title}
      </Component>
    </Wrapper>
  );
});

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  * {
    width: fit-content;
  }
`;

const SeparatedButton = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const StyledMuiButtonBase = styled.div`
  &:hover {
    cursor: pointer;
  }

  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  border: 1px solid black;
`;

export const main = () => {
  const defaultProps = {
    color: select("Color", ["primary", "secondary", "red"], "primary"),
    secondary: boolean("Secondary", false),
    disabled: boolean("Disabled", false),
    loading: boolean("Loading", false),
    size: select("Size", ["xs", "sm", "md", "lg"], "md"),
    startIcon: text("Start icon", "arrow-left"),
    startIconPrefix: text("Start icon prefix", "fa"),
    endIcon: text("End icon", "arrow-right"),
    endIconPrefix: text("End icon prefix", "fa"),
    content: text("Button text (content)", "Submit"),
    column: boolean("Display in column", false),
  };


  return (
    <>
      <Container column={defaultProps.column}>
        <div>
          <p>Button</p>
          <BaseComponent
            Component={Button}
            {...defaultProps}
          />
        </div>

        <div>
          <p>OutlineButton</p>
          <BaseComponent
            Component={OutlineButton}
            {...defaultProps}
          />
        </div>
        <div>
          <p>TextButton</p>
          <BaseComponent
            Component={TextButton}
            {...defaultProps}
          />
        </div>

        <div>
          <p>TextButtonCircleIcon</p>
          <BaseComponent
            content="Delete"
            Component={DeleteButton}
            {...defaultProps}
          />
        </div>

      </Container>
      <Container>
        <FullWidthWrapper>
          <p>Button (full width)</p>
          <BaseComponent
            Component={Button}
            block
            {...defaultProps}
          />
        </FullWidthWrapper>
      </Container>
    </>
  );
};

export const buttonsReactRefTest = () => {
  const refHtmlElement = useRef(null);
  const refMuiButtonBase = useRef(null);
  const refStyledMuiButtonBase = useRef(null);
  const refBaseButton = useRef(null);
  const refOutlineButton = useRef(null);
  const refTextButton = useRef(null);
  const refButton = useRef(null);

  useEffect(() => {
    console.log({
      refHtmlElement,
      refMuiButtonBase,
      refStyledMuiButtonBase,
      refBaseButton,
      refOutlineButton,
      refTextButton,
      refButton,
    });
  }, []);

  return (
    <ButtonsWrapper>
      <SeparatedButton>
        <button ref={refHtmlElement} type="button">
          Native button
        </button>
      </SeparatedButton>
      <SeparatedButton>
        <MuiButtonBase ref={refMuiButtonBase}>
          Material-UI base button
        </MuiButtonBase>
      </SeparatedButton>
      <SeparatedButton>
        <StyledMuiButtonBase ref={refStyledMuiButtonBase}>
          Styled Material-UI base button
        </StyledMuiButtonBase>
      </SeparatedButton>
      <BaseComponent
        title="Button base"
        ref={refBaseButton}
        Component={ButtonBase}
      />
      <BaseComponent
        title="Outline button"
        Component={OutlineButton}
        ref={refOutlineButton}
      />
      <BaseComponent
        title="Text button"
        Component={TextButton}
        ref={refTextButton}
      />
      <BaseComponent title="Button" Component={Button} ref={refButton} />
      <p>See console for refs output</p>
    </ButtonsWrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 32px;
`;
