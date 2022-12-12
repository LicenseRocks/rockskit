import styled, { css } from "styled-components";

export const Row = styled.tr`
  height: ${({ size }) => (size === "sm" ? 32 : 80)}px;
  background-color: ${({ theme }) => theme.palette.common.white};

  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.palette.gray.regular};
  }

  ${({ hasData, theme }) =>
    hasData &&
    css`
      ${theme.breakpoints.down("sm")} {
        height: unset;
        display: block;
        margin-bottom: ${theme.spacing(2)};
        padding: ${theme.spacing(4)};
        border-radius: 0;
      }
    `}
`;
