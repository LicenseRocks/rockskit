import React, { forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ colors }) => {
      return css`
        background-color: ${colors.backgroundColor};
        color: ${colors.color};
        svg {
          color: ${colors.color};
        }
      `;
    }}
  }
`;

const colorMapper = (color, theme) => {
  if (color === "secondary")
    return {
      backgroundColor: theme.palette.gray.regular,
      color: theme.palette.black.main,
    };

  if (color === "subtle")
    return {
      backgroundColor: theme.palette.gray.regular,
      color: theme.palette.gray.dark,
    };

  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  };
};

export const Button = forwardRef(({ color, secondary,...props }, ref) => {
  const theme = useTheme();
  const colors = colorMapper(secondary ? "secondary" : color, theme);

  return <StyledButton ref={ref} colors={colors} {...props} />;
});

Button.propTypes = ButtonBasePropTypes;
