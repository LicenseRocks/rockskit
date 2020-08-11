import React from "react";
import styled, { css } from "styled-components";
import MuiButtonBase from "@material-ui/core/ButtonBase";

import { DISPLAY, Icon, SPACER } from "../..";
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

const getIconSize = (buttonSize) => {
  switch (buttonSize) {
    case "xs":
      return "sm";
    case "sm":
      return "md";
    default:
      return "lg";
  }
};

export const ButtonBase = ({
  content,
  children,
  endIcon,
  href,
  size,
  startIcon,
  ...props
}) => {
  const iconSize = getIconSize(size);

  return (
    <StyledButton
      component={href ? "a" : "button"}
      href={href}
      size={size}
      {...props}
    >
      {startIcon && <Icon icon={startIcon} size={iconSize} mr={2} />}
      {content || children}
      {endIcon && <Icon icon={endIcon} size={iconSize} ml={2} />}
    </StyledButton>
  );
};

ButtonBase.propTypes = ButtonBasePropTypes;

ButtonBase.defaultProps = ButtonBaseDefaultProps;
