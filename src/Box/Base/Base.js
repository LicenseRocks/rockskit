import React from "react";
import styled from "styled-components";

import { DISPLAY, SPACER } from "../..";
import { BoxBasePropTypes, BoxBaseDefaultProps } from "./props";

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  box-shadow: ${({ shadow }) => {
    if (shadow === "long") return "0px 16px 56px rgba(41, 40, 57, 0.16)";
    if (shadow === "normal") return "0px 8px 32px rgba(41, 40, 57, 0.08)";
    return "none";
  }};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const BoxBase = (props) => {
  return <StyledBox {...props} />;
};

BoxBase.propTypes = BoxBasePropTypes;

BoxBase.defaultProps = BoxBaseDefaultProps;
