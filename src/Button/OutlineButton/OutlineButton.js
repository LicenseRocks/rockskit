import React from "react";
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
      backgroundColorHover: theme.palette.gray.semiLight,
      borderColor: theme.palette.gray.dark,
      color: theme.palette.gray.dark,
    };

  return {
    backgroundColorHover: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  };
};

export const OutlineButton = ({ color, ...props }) => {
  const theme = useTheme();
  const colors = colorMapper(color, theme);

  return <StyledButton colors={colors} {...props} />;
};

OutlineButton.propTypes = ButtonBasePropTypes;
