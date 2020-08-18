import React from "react";
import styled, { css } from "styled-components";

import { SPACER } from "..";
import { DividerPropTypes, DividerDefaultProps } from "./props";

const StyledDivider = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;

  &:before {
    content: "";
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: ${({ thickness }) => thickness}px;
  }
  &:after {
    content: "${({ text }) => text}";
    position: relative;
    display: inline-block;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    background-color: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.gray.dark};
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    font-style: italic;
  }
/*
  ${({ vertical }) =>
    vertical &&
    css`
      width: ${({ thickness }) => thickness}px;
      height: 100%;
    `}

  ${({ flexItem }) =>
    flexItem &&
    css`
      height: auto;
      align-self: stretch;
    `}; */

  ${(props) => SPACER(props)}
`;
export const Divider = (props) => <StyledDivider {...props} />;

Divider.propTypes = DividerPropTypes;

Divider.defaultProps = DividerDefaultProps;
