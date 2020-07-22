import React from "react";
import styled from "styled-components";

import { ExplorerLayoutFooterPropTypes } from "./props";

const StyledFooter = styled.div`
  height: 70px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ExplorerLayoutFooter = ({ action, ...props }) => {
  return <StyledFooter {...props} />;
};

ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;
