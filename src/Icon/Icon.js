import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, useTheme } from "styled-components";

import { COLOR, DISPLAY, SPACER, KIT_ICON_SIZES } from "../theme";
import { IconPropTypes, IconDefaultProps } from "./props";

const Rounded = styled.div`
  ${({ color, theme }) =>
    css`
      border: solid 2px ${theme.palette.gray.regular};
      background-color: ${theme.palette[color].light};
    `}
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-sizing: border-box;
  position: relative;

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

const Squared = styled.div`
  ${({ color, theme }) =>
    css`
      border: solid 1px ${theme.palette[color].light};
    `}
  width: 40px;
  height: 40px;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;

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

    ${({ simple }) =>
    simple &&
    css`
      ${(theme) => COLOR(theme)}
      ${(theme) => DISPLAY(theme)}
      ${(theme) => SPACER(theme)}
    `};
`;

export const Icon = ({
  className,
  color,
  onClick,
  rounded,
  squared,
  prefix,
  ...props
}) => {
  const theme = useTheme();
  const defaultProps = {
    color,
    prefix: prefix || theme.defaultIconSet,
    rounded,
    squared,
    simple: !rounded && !squared,
    ...props,
  };

  let Wrapper = null;

  if (rounded) Wrapper = Rounded;

  if (squared) Wrapper = Squared;

  return Wrapper ? (
    <Wrapper className={className} color={color} onClick={onClick} {...props}>
      <StyledIcon {...defaultProps} />
    </Wrapper>
  ) : (
    <StyledIcon className={className} onClick={onClick} {...defaultProps} />
  );
};

Icon.propTypes = IconPropTypes;

Icon.defaultProps = IconDefaultProps;
