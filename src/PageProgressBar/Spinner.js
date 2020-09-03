import * as React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.spacing(4)};
  top: ${({ theme }) => theme.spacing(4)};
  display: block;
  z-index: 1031;
`;

const InnerSpinner = styled.div`
  animation: 1s linear infinite spinner;
  border-bottom: 2px solid transparent;
  border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  border-right: 2px solid transparent;
  border-top: 2px solid ${({ theme }) => theme.palette.primary.main};
  box-sizing: border-box;
  height: 24px;
  width: 24px;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = () => (
  <StyledSpinner>
    <InnerSpinner />
  </StyledSpinner>
);
