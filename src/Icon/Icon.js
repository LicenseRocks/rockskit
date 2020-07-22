import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { KIT_ICON_SIZES } from "../theme";
import { IconPropTypes, IconDefaultProps } from "./props";

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${({ iconSize }) => KIT_ICON_SIZES[iconSize]}px;
  ${({ color, theme }) => color && `color: ${theme.palette[color].main};`}
`;

export const Icon = ({ icon, prefix, size: iconSize, ...props }) => {
  return <StyledIcon icon={[prefix, icon]} iconSize={iconSize} {...props} />;
};

Icon.propTypes = IconPropTypes;

Icon.defaultProps = IconDefaultProps;
