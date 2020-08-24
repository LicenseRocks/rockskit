import React from "react";
import styled from "styled-components";

import { DashboardLayoutFooterPropTypes } from "./props";

const StyledFooter = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const DashboardLayoutFooter = ({ content, ...props }) => {
  return <StyledFooter {...props}>{content}</StyledFooter>;
};

DashboardLayoutFooter.propTypes = DashboardLayoutFooterPropTypes;
