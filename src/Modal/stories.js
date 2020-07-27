import React, { useState } from "react";
import styled from "styled-components";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Modal, Button } from "..";

export default {
  title: "Modal",
  decorators: [StoryWrapper, withKnobs],
};

const StyledWrapper = styled.div`
  padding: 10px;
`;

const BaseComponent = (props) => {
  const [open, setOpen] = useState(false);
  const defaultProps = {
    open,
    onClose: () => setOpen(false),
    fullWidth: true,
    ...props,
  };

  return (
    <>
      <Button content="Open Modal" onClick={() => setOpen(true)} />
      <Modal {...defaultProps}>
        <StyledWrapper>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </StyledWrapper>
      </Modal>
    </>
  );
};

export const main = () => <BaseComponent />;

export const withTitle = () => (
  <BaseComponent title={text("Title Text", "Title")} />
);

export const withLoading = () => (
  <BaseComponent loading={boolean("Loading", true)} />
);

export const withAction = () => (
  <BaseComponent action={() => {}} actionTitle={text("Action Text", "Save")} />
);
