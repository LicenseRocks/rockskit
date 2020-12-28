import React, { useState } from "react";
import styled, { css } from "styled-components";
import Popover from "@material-ui/core/Popover";

import { ShareModulePropTypes, ShareModuleDefaultProps } from ".";
import { Button, Icon } from "..";
import { DISPLAY, SPACER } from "../theme";

const BUTTON_SIZE = 32;

const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);
    padding: ${({ theme }) => theme.spacing(2)};
    margin-top: ${BUTTON_SIZE + 8}px;
  }
`;

const StyledButton = styled(Button)`
  && {
    min-width: ${BUTTON_SIZE}px;
    max-width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ orientation }) =>
    orientation === "vertical" ? "column" : "row"};

  a {
    display: block;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.palette.text.secondary};
      transition: all 0.1s ease-in-out;
    }

    :hover {
      svg {
        color: ${({ theme }) => theme.palette.text.primary};
      }
    }

    :not(:last-child) {
      ${({ orientation, theme }) => {
        if (orientation === "vertical")
          return css`
            margin-bottom: ${theme.spacing(2)};
          `;
        return css`
          margin-right: ${theme.spacing(2)};
        `;
      }}
    }
  }
`;

export const MiniShareModule = ({
  iconProps,
  orientation,
  shareOptions,
  url,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const encodedUrl = encodeURIComponent(url);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const renderIcon = (icon, href) => (
    <a href={href} rel="noreferrer" target="_blank">
      <Icon icon={icon} prefix="fab" {...iconProps} />
    </a>
  );

  return (
    <>
      <StyledButton
        icon="share-alt"
        onClick={handlePopoverOpen}
        size="sm"
        {...props}
      />

      <StyledPopover
        id="share-module-popover"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
      >
        <Container orientation={orientation}>
          {shareOptions.includes("twitter") &&
            renderIcon(
              "twitter",
              `https://twitter.com/intent/tweet?url=${encodedUrl}`
            )}

          {shareOptions.includes("facebook") &&
            renderIcon(
              "facebook-f",
              `https://www.facebook.com/sharer.php?u=${encodedUrl}`
            )}

          {shareOptions.includes("linkedin") &&
            renderIcon(
              "linkedin-in",
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
            )}
        </Container>
      </StyledPopover>
    </>
  );
};

MiniShareModule.propTypes = ShareModulePropTypes;

MiniShareModule.defaultProps = ShareModuleDefaultProps;
