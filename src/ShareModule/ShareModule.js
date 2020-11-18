import React from "react";
import styled, { css, useTheme } from "styled-components";
// import useMediaQuery from "@material-ui/core/useMediaQuery"
import copy from "copy-to-clipboard";

import {
  ShareModuleButton,
  ShareModulePropTypes,
  ShareModuleDefaultProps,
} from ".";
import { Text } from "../Typography";
import { Input } from "../Form";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { DISPLAY, SPACER } from "../theme";

const Container = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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

export const ShareModule = ({
  buttonProps,
  copyText,
  shareOptions,
  url,
  ...props
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const encodedUrl = encodeURIComponent(url);
  const canUseNavigator = typeof window !== "undefined" && navigator?.share;

  return (
    <Container {...props}>
      <ButtonsWrapper>
        {shareOptions.includes("twitter") && (
          <ShareModuleButton
            icon="twitter"
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
            buttonProps={buttonProps}
          />
        )}

        {shareOptions.includes("facebook") && (
          <ShareModuleButton
            icon="facebook-f"
            href={`https://www.facebook.com/sharer.php?u=${encodedUrl}`}
            buttonProps={buttonProps}
          />
        )}

        {shareOptions.includes("telegram") && matches && (
          <ShareModuleButton
            icon="telegram-plane"
            href={`tg://msg?text=${encodedUrl}`}
            buttonProps={buttonProps}
          />
        )}

        {shareOptions.includes("whatsapp") && matches && (
          <ShareModuleButton
            icon="whatsapp"
            href={`whatsapp://send?${encodedUrl}`}
            buttonProps={buttonProps}
          />
        )}

        {shareOptions.includes("email") && (
          <ShareModuleButton
            icon="envelope"
            iconPrefix={theme.defaultIconSet}
            href={`mailto:?body=${encodedUrl}`}
            buttonProps={buttonProps}
          />
        )}

        {shareOptions.includes("navigator") && canUseNavigator && (
          <ShareModuleButton
            icon="ellipsis-h"
            iconPrefix={theme.defaultIconSet}
            onClick={() => navigator?.share({ url: encodedUrl })}
            buttonProps={buttonProps}
          />
        )}
      </ButtonsWrapper>

      <StyledText content={copyText} />

      <Input
        endIcon="copy"
        endIconColor="secondary"
        endIconOnClick={() => copy(encodedUrl)}
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
