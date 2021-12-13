import React from "react";
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
      backgroundColor: theme.palette.gray.dark,
      color: theme.palette.common.white,
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

export const Button = ({ color, ...props }) => {
  const theme = useTheme();
  const colors = colorMapper(color, theme);

  return <StyledButton colors={colors} {...props} />;
};

Button.propTypes = ButtonBasePropTypes;
