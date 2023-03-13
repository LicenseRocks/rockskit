import React, { forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ colors }) => {
      return css`
        border: 2px solid ${colors.borderColor} !important;
        color: ${colors.color} !important;
        svg {
          color: ${colors.color};
        }

        :hover {
          background-color: ${colors.backgroundColorHover};
          color: ${colors.colorHover};
          opacity: 1;
        }
      `;
    }}
  }
`;

const colorMapper = (color, theme) => {
  if (color === "secondary")
    return {
      backgroundColorHover: theme.palette.gray.semiLight,
      borderColor: theme.palette.black.main,
      color: theme.palette.black.main,
    };

  return {
    backgroundColorHover: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  };
};

export const OutlineButton = forwardRef(({ color, secondary, ...props }, ref) => {
  const theme = useTheme();
  const colors = colorMapper(secondary ? "secondary" : color, theme);

  return <StyledButton ref={ref} colors={colors} {...props} />;
});

OutlineButton.propTypes = ButtonBasePropTypes;
