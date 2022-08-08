import React, { forwardRef } from "react";
import styled, { css, useTheme } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ colors }) => {
      return css`
        border: 2px solid ${colors.borderColor};
        color: ${colors.color};
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
      borderColor: theme.palette.gray.regular,
      color: theme.palette.gray.dark,
    };

  if (color === "subtle")
    return {
      colorHover: theme.palette.gray.semiLight,
      backgroundColorHover: theme.palette.gray.black,
      borderColor: theme.palette.gray.black,
      color: theme.palette.gray.black,
    };

  return {
    backgroundColorHover: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  };
};

export const OutlineButton = forwardRef(({ color, ...props }, ref) => {
  const theme = useTheme();
  const colors = colorMapper(color, theme);

  return <StyledButton ref={ref} colors={colors} {...props} />;
});

OutlineButton.propTypes = ButtonBasePropTypes;
