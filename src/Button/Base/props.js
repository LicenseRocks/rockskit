import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";
import { IconPropTypes } from "../../Icon/props";

export const ButtonBasePropTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "subtle"]),
  content: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  endIcon: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconProps: IconPropTypes,
  noPadding: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  startIcon: PropTypes.string,
  target: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ButtonBaseDefaultProps = {
  color: "primary",
  size: "md",
};
