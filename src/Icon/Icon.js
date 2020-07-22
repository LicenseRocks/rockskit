import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { KIT_ICON_SIZES } from "../theme";
import { IconPropTypes, IconDefaultProps } from "./props";

const StyledIcon = styled(({ icon, prefix, size, ...props }) => (
  <FontAwesomeIcon icon={[prefix, icon]} {...props} />
))`
  font-size: ${({ size }) => KIT_ICON_SIZES[size]}px;
  ${({ color, theme }) => color && `color: ${theme.palette[color].main};`}
`;

export const Icon = (props) => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = IconPropTypes;

Icon.defaultProps = IconDefaultProps;
