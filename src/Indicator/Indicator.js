import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { DISPLAY, SPACER } from "../theme";
import { IndicatorDefaultProps, IndicatorPropTypes } from "./props";

const StyledIndicator = styled.div`
  && {
    background-color: ${({ color, theme }) => theme.palette[color].main};
    color: ${({ color, theme }) => theme.palette.common.white};
    border-radius: 100%;
    min-height: 20px;
    min-width: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${(theme) => SPACER(theme)}
    ${(theme) => DISPLAY(theme)}
  }
`;

export const Indicator = ({ content, children, ...props }) => {
  return <StyledIndicator {...props}>{content || children}</StyledIndicator>;
};

Indicator.propTypes = IndicatorPropTypes;

Indicator.defaultProps = IndicatorDefaultProps;
