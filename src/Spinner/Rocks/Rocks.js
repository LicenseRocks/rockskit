import React from "react";
import styled from "styled-components";

import { RocksSpinnerPropTypes, RocksSpinnerDefaultProps } from "./props";
import { COLOR, DIMENSION, DISPLAY, SPACER } from "../..";

const StyledRocksSpinner = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;

  .dot {
    width: ${({ size }) => size / 6}px;
    height: ${({ size }) => size / 6}px;
    background-color: ${({ color, theme }) =>
      color || theme.palette.primary.main};
    border-radius: 100%;
    position: absolute;
    bottom: 5px;
    left: 0;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .circle {
    width: ${({ size }) => size - 12}px;
    height: ${({ size }) => size - 12}px;
    border: ${({ size }) => size / 6}px solid ${({ color, theme }) =>
  color || theme.palette.primary.main};
    border-radius: 100%;
    position: absolute;
    top: 5px;
    right: 0;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  ${(theme) => COLOR(theme)}
  ${(theme) => DIMENSION(theme)}
  ${(theme) => DISPLAY(theme)}
  ${(theme) => SPACER(theme)}
`;

export const RocksSpinner = (props) => (
  <StyledRocksSpinner {...props}>
    <div className="dot" />
    <div className="circle" />
  </StyledRocksSpinner>
);

RocksSpinner.propTypes = RocksSpinnerPropTypes;

RocksSpinner.defaultProps = RocksSpinnerDefaultProps;
