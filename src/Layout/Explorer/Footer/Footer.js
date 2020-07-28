import React from "react";
import styled from "styled-components";

import { ExplorerLayoutFooterPropTypes } from "./props";

const StyledFooter = styled.div`
  box-sizing: border-box;
  height: 80px;
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const ExplorerLayoutFooter = ({ action, ...props }) => {
  return <StyledFooter {...props} />;
};

ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;
