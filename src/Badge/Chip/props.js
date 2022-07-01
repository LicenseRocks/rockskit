import PropTypes from "prop-types";

import {
  DISPLAY_PROP_TYPES,
  SPACER_PROP_TYPES,
  THEME_COLORS,
} from "../../theme";

export const ChipBadgePropTypes = {
  color: PropTypes.oneOf(THEME_COLORS),
  label: PropTypes.string,
  icon: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ChipBadgeDefaultProps = {
  color: "black",
};
