import React from "react";
import styled from "styled-components";

import { DotsSpinnerPropTypes, DotsSpinnerDefaultProps } from "./props";
import { COLOR, DIMENSION, DISPLAY, SPACER } from "../..";

const StyledDotsSpinner = styled.div`
  width: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: ${({ size }) => size / 4}px;
    height: ${({ size }) => size / 4}px;
    background-color: ${({ color, theme }) =>
      color || theme.palette.primary.main};

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }

  ${(theme) => COLOR(theme)}
  ${(theme) => DIMENSION(theme)}
  ${(theme) => DISPLAY(theme)}
  ${(theme) => SPACER(theme)}
`;

export const DotsSpinner = (props) => (
  <StyledDotsSpinner {...props}>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </StyledDotsSpinner>
);

DotsSpinner.propTypes = DotsSpinnerPropTypes;

DotsSpinner.defaultProps = DotsSpinnerDefaultProps;
