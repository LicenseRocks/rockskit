import PropTypes from "prop-types";

import { THEME_COLORS } from "../../theme";

export const ChipBadgePropTypes = {
  color: PropTypes.oneOf(THEME_COLORS),
  label: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export const ChipBadgeDefaultProps = {
  color: "primary",
};
