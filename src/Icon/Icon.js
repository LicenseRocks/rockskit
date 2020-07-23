import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

import { KIT_ICON_SIZES } from "../theme";
import { IconPropTypes, IconDefaultProps } from "./props";

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
`;

export const Icon = (props) => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = IconPropTypes;

Icon.defaultProps = IconDefaultProps;
