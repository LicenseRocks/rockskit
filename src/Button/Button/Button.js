import React from "react";
import styled, { css } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ color, theme }) => {
      if (color === "secondary")
        return css`
          background-color: ${theme.palette.gray.dark};
          color: ${theme.palette.common.white};
          svg {
            color: ${theme.palette.common.white};
          }
        `;

      if (color === "subtle")
        return css`
          background-color: ${theme.palette.gray.regular};
          color: ${theme.palette.gray.medium};
          svg {
            color: ${theme.palette.gray.medium};
          }
        `;

      return css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.white};
        svg {
          color: ${theme.palette.common.white};
        }
      `;
    }}
  }
`;

export const Button = (props) => {
  return <StyledButton {...props} />;
};

Button.propTypes = ButtonBasePropTypes;
