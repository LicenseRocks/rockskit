import React from "react";
import styled, { css } from "styled-components";

import {
  ShareModuleButton,
  ShareModulePropTypes,
  ShareModuleDefaultProps,
} from ".";
import { Text } from "../Typography";
import { Input } from "../Form";

const Container = styled.div``;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const StyledText = styled(Text).attrs(() => ({
  component: "div",
  color: "textSecondary",
  fontSize: "sm",
  fontStyle: "italic",
}))`
  && {
    ${({ theme: { spacing } }) => css`
      margin: ${spacing(2)}px 0;
    `}
  }
`;

export const ShareModule = ({ link }) => {
  return (
    <Container>
      <ButtonsWrapper>
        <ShareModuleButton
          icon="twitter"
          href={`https://twitter.com/intent/tweet?url=${link}`}
        />

        <ShareModuleButton
          icon="facebook-f"
          href={`https://www.facebook.com/sharer.php?u=${link}`}
        />

        <ShareModuleButton
          icon="telegram-plane"
          href={`tg://msg?text=${link}`}
        />

        <ShareModuleButton icon="whatsapp" href={`whatsapp://send?${link}`} />

        <ShareModuleButton icon="envelope" iconPrefix="far" />
      </ButtonsWrapper>

      <StyledText content="Or copy the link" />

      <Input endIcon="copy" readOnly startIcon="link" value={link} />
    </Container>
  );
};

ShareModule.propTypes = ShareModulePropTypes;

ShareModule.defaultProps = ShareModuleDefaultProps;
