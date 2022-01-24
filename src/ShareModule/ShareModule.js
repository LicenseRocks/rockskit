import React, { useState } from "react";
import styled, { css, useTheme } from "styled-components";
import copy from "copy-to-clipboard";
import { CodeBlock, obsidian } from "react-code-blocks";
import {
  ShareModuleButton,
  ShareModulePropTypes,
  ShareModuleDefaultProps,
} from ".";
import { Text } from "../Typography";
import { Input } from "../Form";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { DISPLAY, SPACER } from "../theme";
import { Modal } from "..";

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

const CodeContainer = styled.div`
  span {
    border-radius: 0px !important;
    background-color: ${({ theme }) => theme.palette.gray.semiLight} !important;

    .token {
      color: ${({ theme }) => theme.palette.gray.dark} !important;
    }

    .attr-value {
      font-weight: 700 !important;
      color: ${({ theme }) => theme.palette.common.black} !important;
    }
  }
`;

const StyledCodeBlock = styled(CodeBlock)``;

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
  nftId,
  appUrl,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const encodedUrl = encodeURIComponent(url);
  const canUseNavigator = typeof window !== "undefined" && navigator?.share;
  const codeSnippets = `<div
   id="item"
   data-item-type="NFT"
   data-item-id="${nftId}"
   data-app-url="${appUrl}"
   class="nft-item"
 ></div>

 <link
   href="https://licenserocks.github.io/creators-hub-widgets/main.css"
   rel="stylesheet"
 />
 <script 
   src="https://licenserocks.github.io/creators-hub-widgets/main.js">
 </script>`;

  const defaultProps = {
    open,
    onClose: () => setOpen(false),
    fullWidth: true,
    ...props,
  };

  return (
    <Container {...props}>
      <Modal
        cancelButton={true}
        action={() => copy(codeSnippets)}
        actionTitle="Copy code"
        title="Get NFT embed code"
        {...defaultProps}
      >
        <CodeContainer>
          {" "}
          <StyledCodeBlock
            language="jsx"
            text={codeSnippets}
            theme={obsidian}
            wrapLines={true}
            showLineNumbers={false}
            codeBlock
          />
        </CodeContainer>
      </Modal>
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

        {shareOptions.includes("embed") && (
          <ShareModuleButton
            icon="code"
            iconPrefix={theme.defaultIconSet}
            onClick={() => setOpen(true)}
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
