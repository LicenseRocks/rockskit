import React from "react";
import styled, { css } from "styled-components";
import MuiButtonBase from "@material-ui/core/ButtonBase";

import { DISPLAY, SPACER } from "../../theme";
import { ButtonBasePropTypes, ButtonBaseDefaultProps } from "./props";

const StyledButton = styled(MuiButtonBase)`
  && {
    box-sizing: border-box;
    border-radius: 12px;
    padding: ${({ theme }) => theme.spacing(0, 4)};
    min-width: 40px;
    height: 40px;
    transition: all 100ms ease-in-out;

    :hover {
      opacity: 0.7;
    }

    :disabled {
      opacity: 0.3;
      cursor: not-allowed;
      pointer-events: none;
    }

    ${({ size, theme }) => {
      if (size === "xs") {
        return css`
          font-size: ${theme.typography.button.fontSizeXs};
          padding: ${theme.spacing(0, 2)};
          height: 24px;
          border-radius: 8px;
        `;
      }

      if (size === "sm") {
        return css`
          font-size: ${theme.typography.button.fontSizeSm};
          padding: ${theme.spacing(0, 2)};
          height: 32px;
          border-radius: 8px;
        `;
      }

      return css`
        font-size: ${theme.typography.button.fontSizeMd};
      `;
    }}

    ${(theme) => SPACER(theme)}
    ${(theme) => DISPLAY(theme)}
  }
`;

export const ButtonBase = ({ content, children, href, ...props }) => {
  return (
    <StyledButton component={href ? "a" : "button"} href={href} {...props}>
      {content || children}
    </StyledButton>
  );
};

ButtonBase.propTypes = ButtonBasePropTypes;

ButtonBase.defaultProps = ButtonBaseDefaultProps;
