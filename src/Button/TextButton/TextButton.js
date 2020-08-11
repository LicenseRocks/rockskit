import React from "react";
import styled, { css } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ color, theme }) => {
      if (color === "secondary")
        return css`
          color: ${theme.palette.gray.dark};
          svg {
            color: ${theme.palette.gray.dark};
          }
        `;

      if (color === "subtle")
        return css`
          color: ${theme.palette.gray.medium};
          svg {
            color: ${theme.palette.gray.medium};
          }
        `;

      return css`
        color: ${theme.palette.primary.main};
        svg {
          color: ${theme.palette.primary.main};
        }
      `;
    }}
  }
`;

export const TextButton = (props) => {
  return <StyledButton {...props} />;
};

TextButton.propTypes = ButtonBasePropTypes;
