import React from "react";
import styled, { css } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { AlertPropTypes, AlertDefaultProps } from "./props";

const StyledMessage = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 40px;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 100ms ease-in-out;
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ color, theme }) =>
    color === "danger" &&
    css`
      background-color: ${theme.palette.error.light};
      color: ${theme.palette.error.main};
      svg {
        color: ${theme.palette.error.main};
      }
    `}

  ${({ color, theme }) =>
    color === "warning" &&
    css`
      background-color: ${theme.palette.primary.light};
      color: ${theme.palette.primary.main};
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Alert = ({ content, children, ...props }) => {
  return (
    <StyledMessage {...props}>
      <Icon icon="info-circle" mr={2} />
      {content || children}
    </StyledMessage>
  );
};

Alert.propTypes = AlertPropTypes;

Alert.defaultProps = AlertDefaultProps;
