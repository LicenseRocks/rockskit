import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, H3, SPACER } from "..";

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;

  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.semiLight};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const InspectBanner = () => {
  const theme = useTheme();

  return (
    <Container>
      <H3>Inspect NFT correctness</H3>
    </Container>
  );
};
