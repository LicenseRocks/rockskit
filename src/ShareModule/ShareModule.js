import React from "react";
import styled, { css } from "styled-components";
import copy from "copy-to-clipboard";

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
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const StyledText = styled(Text).attrs(() => ({
  component: "div",
  color: "textSecondary",
  fontSize: "sm",
  fontStyle: "italic",
}))`
  && {
    ${({ theme: { spacing } }) => css`
      margin: ${spacing(2, 0)};
    `}
  }
`;

export const ShareModule = ({ copyText, shareOptions, url }) => {
  return (
    <Container>
      <ButtonsWrapper>
        {shareOptions.includes("twitter") && (
          <ShareModuleButton
            icon="twitter"
            href={`https://twitter.com/intent/tweet?url=${url}`}
          />
        )}

        {shareOptions.includes("facebook") && (
          <ShareModuleButton
            icon="facebook-f"
            href={`https://www.facebook.com/sharer.php?u=${url}`}
          />
        )}

        {shareOptions.includes("telegram") && (
          <ShareModuleButton
            icon="telegram-plane"
            href={`tg://msg?text=${url}`}
          />
        )}

        {shareOptions.includes("whatsapp") && (
          <ShareModuleButton icon="whatsapp" href={`whatsapp://send?${url}`} />
        )}

        {shareOptions.includes("email") && (
          <ShareModuleButton
            icon="envelope"
            iconPrefix="far"
            href={`mailto:?body=${url}`}
          />
        )}

        {shareOptions.includes("navigator") && navigator.share && (
          <ShareModuleButton
            icon="ellipsis-h"
            iconPrefix="far"
            onClick={() => navigator.share({ url })}
          />
        )}
      </ButtonsWrapper>

      <StyledText content={copyText} />

      <Input
        endIcon="copy"
        endIconColor="secondary"
        endIconOnClick={() => copy(url)}
        readOnly
        selectable
        startIcon="link"
        value={url}
      />
    </Container>
  );
};

ShareModule.propTypes = ShareModulePropTypes;

ShareModule.defaultProps = ShareModuleDefaultProps;
