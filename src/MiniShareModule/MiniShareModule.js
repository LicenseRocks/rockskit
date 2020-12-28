import React from "react";
import styled, { css } from "styled-components";

import { ShareModulePropTypes, ShareModuleDefaultProps } from ".";
import { Icon } from "../Icon";
import { DISPLAY, SPACER } from "../theme";

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

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const MiniShareModule = ({ iconProps, shareOptions, url, ...props }) => {
  const encodedUrl = encodeURIComponent(url);

  const renderIcon = (icon, href) => (
    <a href={href} rel="noreferrer" target="_blank">
      <Icon icon={icon} prefix="fab" {...iconProps} />
    </a>
  );

  return (
    <Container {...props}>
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
  );
};

MiniShareModule.propTypes = ShareModulePropTypes;

MiniShareModule.defaultProps = ShareModuleDefaultProps;
