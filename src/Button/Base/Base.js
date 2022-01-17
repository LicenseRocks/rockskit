import React from "react";
import styled, { css } from "styled-components";
import MuiButtonBase from "@material-ui/core/ButtonBase";

import { DISPLAY, DotsSpinner, Icon, SPACER } from "../..";
import { ButtonBasePropTypes, ButtonBaseDefaultProps } from "./props";

const StyledButton = styled(MuiButtonBase)`
  && {
    box-sizing: border-box;
    border-radius: 24px;
    ${({ noPadding, theme }) =>
      !noPadding && `padding: ${theme.spacing(0, 4)};`}
    min-width: 40px;
    height: 40px;
    transition: all 100ms ease-in-out;
    width: ${({ block }) => (block ? "100%" : "initial")};

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
          min-width: 24px;
          border-radius: 12px;
        `;
      }

      if (size === "sm") {
        return css`
          font-size: ${theme.typography.button.fontSizeSm};
          padding: ${theme.spacing(0, 2)};
          height: 32px;
          min-width: 32px;
          border-radius: 16px;
        `;
      }

      if (size === "lg") {
        return css`
          font-size: ${theme.typography.button.fontSizeLg};
          padding: ${theme.spacing(0, 8)};
          height: 48px;
          min-width: 48px;
          border-radius: 24px;
        `;
      }

      return css`
        font-size: ${theme.typography.button.fontSizeMd};
      `;
    }}

    ${(theme) => DISPLAY(theme)}
    ${(theme) => SPACER(theme)}
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
  colors,
  content,
  children,
  loading,
  endIcon,
  href,
  icon,
  iconProps,
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
      {loading ? (
        <DotsSpinner color={colors?.color} />
      ) : (
        <>
          {startIcon && <Icon icon={startIcon} size={iconSize} mr={2} />}
          {icon && <Icon icon={icon} size={iconSize} {...iconProps} />}
          {content || children}
          {endIcon && <Icon icon={endIcon} size={iconSize} ml={2} />}
        </>
      )}
    </StyledButton>
  );
};

ButtonBase.propTypes = ButtonBasePropTypes;

ButtonBase.defaultProps = ButtonBaseDefaultProps;
