import React, { forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ colors }) => {
      return css`
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
      color: theme.palette.gray.dark,
    };

  if (color === "subtle")
    return {
      color: theme.palette.gray.dark,
    };

  return {
    color: theme.palette.primary.main,
  };
};

export const TextButton = forwardRef(({ color, ...props }, ref) => {
  const theme = useTheme();
  const colors = colorMapper(color, theme);

  return <StyledButton ref={ref} colors={colors} {...props} />;
});

TextButton.propTypes = ButtonBasePropTypes;
