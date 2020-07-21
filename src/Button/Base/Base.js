import React from "react";
import styled, { css } from "styled-components";
import MuiButtonBase from "@material-ui/core/ButtonBase";

import { ButtonBasePropTypes, ButtonBaseDefaultProps } from "./props";

const StyledButton = styled(MuiButtonBase)`
  && {
    box-sizing: border-box;
    border-radius: 12px;
    padding: 0 ${({ theme }) => theme.spacing(4)}px;
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
          padding: 0 ${theme.spacing(2)}px;
          height: 24px;
          border-radius: 8px;
        `;
      }

      if (size === "sm") {
        return css`
          font-size: ${theme.typography.button.fontSizeSm};
          padding: 0 ${theme.spacing(2)}px;
          height: 32px;
          border-radius: 8px;
        `;
      }

      return css`
        font-size: ${theme.typography.button.fontSizeMd};
      `;
    }}
  }
`;

export const ButtonBase = ({ content, children, ...props }) => {
  return <StyledButton {...props}>{content || children}</StyledButton>;
};

ButtonBase.propTypes = ButtonBasePropTypes;

ButtonBase.defaultProps = ButtonBaseDefaultProps;
