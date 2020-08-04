import PropTypes from "prop-types";

import {
  DISPLAY_PROP_TYPES,
  KIT_ICON_SIZES,
  SPACER_PROP_TYPES,
  THEME_COLORS,
} from "../theme";

export const IconPropTypes = {
  bordered: PropTypes.bool,
  color: PropTypes.oneOf(THEME_COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES)),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const IconDefaultProps = {
  bordered: false,
  color: "primary",
  size: "md",
};
