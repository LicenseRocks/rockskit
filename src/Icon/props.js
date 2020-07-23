import PropTypes from "prop-types";

import { KIT_ICON_SIZES, THEME_COLORS } from "../theme";

export const IconPropTypes = {
  color: PropTypes.oneOf(THEME_COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES)),
};

export const IconDefaultProps = {
  color: "primary",
  prefix: "far",
  size: "md",
};
