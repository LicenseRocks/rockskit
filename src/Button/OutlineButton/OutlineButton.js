import React from "react";
import styled, { css } from "styled-components";

import { ButtonBase, ButtonBasePropTypes } from "../Base";

const StyledButton = styled(ButtonBase)`
  && {
    ${({ color, theme }) => {
      if (color === "secondary")
        return css`
          border: 1px solid ${theme.palette.gray.dark};
          color: ${theme.palette.gray.dark};
          svg {
            color: ${theme.palette.gray.dark};
          }

          :hover {
            background-color: ${theme.palette.gray.semiLight};
            opacity: 1;
          }
        `;

      if (color === "subtle")
        return css`
          border: 1px solid ${theme.palette.gray.regular};
          color: ${theme.palette.gray.medium};
          svg {
            color: ${theme.palette.gray.medium};
          }

          :hover {
            background-color: ${theme.palette.gray.semiLight};
            opacity: 1;
          }
        `;

      return css`
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        svg {
          color: ${theme.palette.primary.main};
        }

        :hover {
          background-color: ${theme.palette.primary.light};
          opacity: 1;
        }
      `;
    }}
  }
`;

export const OutlineButton = (props) => {
  return <StyledButton {...props} />;
};

OutlineButton.propTypes = ButtonBasePropTypes;
