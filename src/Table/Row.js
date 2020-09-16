import styled, { css } from "styled-components";

export const Row = styled.tr`
  height: ${({ size }) => (size === "sm" ? 28 : 52)}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.semiLight};

  ${({ hasData, theme }) =>
    hasData &&
    css`
      ${theme.breakpoints.down("sm")} {
        height: unset;
        display: block;
        border-bottom: 0;
        margin-bottom: ${theme.spacing(4)};
        background-color: ${theme.palette.gray.semiLight};
        border: 1px solid ${theme.palette.gray.regular};
        border-radius: 8px;
      }
    `}
`;
