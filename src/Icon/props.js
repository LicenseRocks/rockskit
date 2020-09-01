import PropTypes from "prop-types";

import {
  COLOR_PROP_TYPES,
  DISPLAY_PROP_TYPES,
  KIT_ICON_SIZES,
  SPACER_PROP_TYPES,
  THEME_COLORS,
} from "../theme";

export const IconPropTypes = {
  color: PropTypes.oneOf(THEME_COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES)),
  ...COLOR_PROP_TYPES,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const IconDefaultProps = {
  color: "primary",
  rounded: false,
  size: "md",
};
