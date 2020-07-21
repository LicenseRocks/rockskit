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
        `;

      if (color === "subtle")
        return css`
          border: 1px solid ${theme.palette.gray.regular};
          color: ${theme.palette.gray.medium};
        `;

      return css`
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
      `;
    }}
  }
`;

export const OutlineButton = (props) => {
  return <StyledButton {...props} />;
};

OutlineButton.propTypes = ButtonBasePropTypes;
