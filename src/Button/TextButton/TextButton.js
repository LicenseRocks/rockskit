import React, { forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ colors }) => {
      return css`
        color: ${colors.color};
        border: 2px solid transparent;
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
      color: theme.palette.black.main,
    };

  if (color === "subtle")
    return {
      color: theme.palette.gray.dark,
    };

  if (color === "red")
    return {
      color: theme.palette.red.dark,
    };

  return {
    color: theme.palette.primary.main,
  };
};

export const TextButton = forwardRef(({ color, secondary, red,...props }, ref) => {
  const theme = useTheme();
  const colors = colorMapper(secondary ? "secondary" : red ? "red" : color, theme);

  return <StyledButton color={color} ref={ref} colors={colors} {...props} />;
});

TextButton.propTypes = ButtonBasePropTypes;
