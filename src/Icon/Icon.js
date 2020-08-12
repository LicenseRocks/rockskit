import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, useTheme } from "styled-components";

import { COLOR, DISPLAY, SPACER, KIT_ICON_SIZES } from "../theme";
import { IconPropTypes, IconDefaultProps } from "./props";

const Bordered = styled.div`
  ${({ color, theme }) =>
    css`
      width: 32px;
      height: 32px;
      border: solid 2px ${theme.palette.gray.regular};
      background-color: ${theme.palette[color].light};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      box-sizing: border-box;
      position: relative;
    `}
`;
const StyledIcon = styled(({ icon, prefix, size, ...props }) => (
  <FontAwesomeIcon icon={[prefix, icon]} {...props} />
))`
  font-size: ${({ size }) => KIT_ICON_SIZES[size]}px;

  ${({ color, theme }) => {
    if (color === "input") return `color: ${theme.palette.gray.regular};`;
    return `color: ${theme.palette[color].main};`;
  }}

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      :hover {
        opacity: 0.7;
      }
    `}

  ${(theme) => COLOR(theme)}
  ${(theme) => DISPLAY(theme)}
  ${(theme) => SPACER(theme)}
`;

export const Icon = ({ bordered, className, color, prefix, ...props }) => {
  const theme = useTheme();
  const defaultProps = {
    color,
    prefix: prefix || theme.defaultIconSet,
    ...props,
  };

  return bordered ? (
    <Bordered className={className} color={color} {...props}>
      <StyledIcon {...defaultProps} />
    </Bordered>
  ) : (
    <StyledIcon className={className} {...defaultProps} />
  );
};

Icon.propTypes = IconPropTypes;

Icon.defaultProps = IconDefaultProps;
